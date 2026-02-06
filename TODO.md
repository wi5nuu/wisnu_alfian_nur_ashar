# Plan to Sanitize Sensitive Data in Astro Portfolio

## Information Gathered
- Sensitive data identified in profile.ts: email, phone, linkedin, github, instagram, facebook, line, website, location.
- Layout.astro contains geo meta tags and schema.org structured data with address and sameAs links.
- LocalAI.ts has contact response text that references social links and email.
- Contact.astro uses profile data, so changes to profile.ts will propagate.

## Plan
- Update src/data/profile.ts to replace sensitive personal information with placeholders.
- Update src/layouts/Layout.astro to remove or genericize geo meta tags and schema address/sameAs.
- Update src/utils/LocalAI.ts to use placeholders in contact responses.

## Dependent Files to Edit
- src/data/profile.ts
- src/layouts/Layout.astro
- src/utils/LocalAI.ts

## Completed Tasks
- [x] Updated src/data/profile.ts: Replaced email, phone, social links, and location with placeholders.
- [x] Updated src/layouts/Layout.astro: Removed geo meta tags and commented out sameAs in schema.
- [x] Updated src/utils/LocalAI.ts: Changed contact responses to use "latest contact" placeholders.

## Followup Steps
- Test the website locally to ensure no broken links or errors.
- Verify that contact forms or links use placeholders appropriately.
- Commit changes and push to GitHub after confirmation.
