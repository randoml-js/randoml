# RandoML Changelog

## 2.0.0 (2020-xx-xx)
#### New Feature
- add predict method

## 1.0.0 beta 2 (2020-02-12)
#### Bug Fix
- added missing types file

## 0.7.0 beta 1 / 1.0.0 beta 1 (2020-02-12)
#### Repository Changes
- replaced `Webpack` with `Rollup`
- added module output

## 0.6.0 (2019-07-22)
#### Repository Changes
- switched from `babel` to `typescript` loader
- added type definitions to output files

#### Breaking Changes
- renamed `randomize` method to `choose`
- renamed `onRandomize` callback to `onChoice`

## 0.5.0 (2019-02-27)
#### Bug Fix
- fixed bug when props are empty

#### Repositiory Changes
- added Travis CI

#### Internal
- moved defaultSettings to defaults.ts

## 0.5.0 beta 1 (2019-02-14)
#### New Feature
- added settings: `min`, `max`, `exclude`, `hold`
- added callbacks: `onInit`, `onRandomize`, `onResult`, `onRangeEnd`
