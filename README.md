
# Remix Indie Stack

![The Remix Indie Stack](https://repository-images.githubusercontent.com/465928257/a241fa49-bd4d-485a-a2a5-5cb8e4ee0abf)

Learn more about [Remix Stacks](https://remix.run/stacks).

```
npx create-remix@latest --template remix-run/indie-stack
```

## What's in the stack

- [Fly app deployment](https://fly.io) with [Docker](https://www.docker.com/)
- Production-ready [SQLite Database](https://sqlite.org)
- Healthcheck endpoint for [Fly backups region fallbacks](https://fly.io/docs/reference/configuration/#services-http_checks)
- [GitHub Actions](https://github.com/features/actions) for deploy on merge to production and staging environments
- Email/Password Authentication with [cookie-based sessions](https://remix.run/utils/sessions#md-createcookiesessionstorage)
- Database ORM with [Prisma](https://prisma.io)
- Styling with [Tailwind](https://tailwindcss.com/)