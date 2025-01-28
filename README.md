# Jobby (Wala ako maisip na mas matino na title)

## Running (Developer)
Run `npm run dev`

## Commit message convention
Because `semantic-release` is used for semantic versioning, prefix commit messages with the following, depending on context of commit:
### Fix
Use this when fixing small parts in the code (e.g. a bug in code)  
**syntax**: `fix(feature): [COMMIT MESSAGE]`

### Feature
Use this when creating a feature (e.g. new component, functionality, etc.) 
**syntax**: `feat(feature): [COMMIT MESSAGE]`

### BREAKING CHANGE
Use this when a breaking change is pushed to the repository (pag breaking change yung commit, masisira yung code pag hinalo mo sa mas lumang version)
**syntax**: `BREAKING CHANGE: [explanation]`
*note:* This must be placed in the footer of the commit message.

#### Another way of writing a BREAKING CHANGE
**syntax:** `perf(feature)`
*note"* This goes in the header of the commit.
