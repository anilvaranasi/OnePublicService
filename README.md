# OnePublicService — ServiceNow Scoped App

**Name:** `OnePublicService`  
**Scope:** `x_146833_onepubl_0`  
**Scope sys_id:** `8502080c838c9790b96f6ed0deaad37f`  
**SDK:** `@servicenow/sdk` v4.13.0  
**GitHub:** [anilvaranasi/OnePublicService](https://github.com/anilvaranasi/OnePublicService)

---

## Project Structure

```
OnePublicService/
├── .github/workflows/
│   ├── sn-pull-sync.yml       ← manual: pull app from ServiceNow into mydev
│   ├── mydev-pipeline.yml     ← push to mydev: build + Playwright (placeholder)
│   └── dev-pipeline.yml       ← push to dev: build + publish to SN DEV
├── src/                       ← app metadata (populated by the pull from ServiceNow)
├── .env.example               ← Credential template
├── now.config.json            ← SDK app config: scope + scopeId
├── package.json
└── README.md
```

---

## Branching Strategy

| Branch | Purpose | What runs |
|--------|---------|-----------|
| `mydev` | Development; the branch you clone locally | Build + Playwright (placeholder) on push |
| `dev` | Publishes the app to ServiceNow DEV | Build + deploy to DEV on push |
| `prod` | Production (not set up yet) | Nothing yet |

All builds and deploys run in GitHub Actions. Nothing is built or deployed locally.

### Workflow

1. **Pull from ServiceNow:** run **Actions → Pull from ServiceNow to mydev** manually. It exports the app from the instance and commits it to `mydev`.
2. **Develop:** clone `mydev` (or `git pull origin mydev`), make changes, then `git push origin mydev`. This triggers build + Playwright.
3. **Publish:** once `mydev` is green, push it to `dev`. This builds and publishes the app to ServiceNow DEV.

```powershell
git checkout mydev
git pull origin mydev
# ... make your changes ...
git add .
git commit -m "feat: your change"
git push origin mydev            # build + Playwright (placeholder)

git push origin mydev:dev        # build + publish to ServiceNow DEV
```

---

## GitHub Actions CI/CD

| Trigger | Workflow | What happens |
|---------|----------|-------------|
| Manual | `sn-pull-sync.yml` | `now-sdk transform` pulls the app from ServiceNow and commits to `mydev` |
| Push to `mydev` | `mydev-pipeline.yml` | Validate config → build → Playwright (placeholder, always passes) |
| Push to `dev` | `dev-pipeline.yml` | Validate config → build → publish to ServiceNow DEV |

### GitHub setup required

| Item | Purpose |
|------|---------|
| Secret `SN_DEV_INSTANCE` | URL of the DEV instance, e.g. `https://<instance>.service-now.com` |
| Secret `SN_DEV_USER` | ServiceNow DEV username |
| Secret `SN_DEV_PASS` | ServiceNow DEV password |
| Environment `development` | Used by the deploy job in `dev-pipeline.yml` |
| Default branch `mydev` | A manual workflow only appears in the Actions tab when it is on the default branch |

Prod secrets (`SN_PROD_*`) are only needed if you choose `prod` in the pull workflow. Prod deployment will be added later.
