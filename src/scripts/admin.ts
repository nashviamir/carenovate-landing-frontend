/**
 * Admin account recovery, for when nobody can log in.
 *
 *   npm run admin -- list                              show all admin emails
 *   npm run admin -- set --email you@example.com       create the user, or reset
 *                                                      its password and unlock it
 *   npm run admin -- set --email you@example.com --password '…'
 *
 * Without --password a strong one is generated and printed once, so it never
 * ends up in your shell history.
 *
 * In Docker: docker compose run --rm tools npm run admin -- list
 */
import config from '@payload-config';
import { randomBytes } from 'crypto';
import { getPayload } from 'payload';
import { parseArgs } from 'util';

const { positionals, values } = parseArgs({
  allowPositionals: true,
  options: {
    email: { type: 'string' },
    password: { type: 'string' },
  },
});

const command = positionals[0];
if (command !== 'list' && !(command === 'set' && values.email)) {
  console.error('Usage: admin list | admin set --email <email> [--password <password>]');
  process.exit(1);
}

const payload = await getPayload({ config });
try {
  if (command === 'list') {
    const { docs } = await payload.find({ collection: 'users', pagination: false, sort: 'email' });
    console.log(docs.length ? docs.map((user) => `  ${user.email}`).join('\n') : '  (no users yet)');
  } else {
    const email = values.email!.trim().toLowerCase();
    const password = values.password ?? randomBytes(12).toString('base64url');
    const { docs } = await payload.find({ collection: 'users', where: { email: { equals: email } }, limit: 1 });

    if (docs[0]) {
      // Also clears any lockout from too many failed login attempts.
      await payload.update({
        collection: 'users',
        id: docs[0].id,
        data: { password, loginAttempts: 0, lockUntil: null },
      });
      console.log(`Password reset for ${email}.`);
    } else {
      await payload.create({ collection: 'users', data: { email, password } });
      console.log(`Created admin ${email}.`);
    }
    if (!values.password) console.log(`Password: ${password}\n(Change it after logging in: Admin → your account.)`);
  }
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
} finally {
  await payload.destroy();
}
process.exit();
