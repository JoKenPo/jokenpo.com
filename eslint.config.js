import { config } from '@fisch0920/config/eslint'

export default [
  ...config,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
    "react/prop-types": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/filename-case": "off",
    "unicorn/no-anonymous-default-export": "off",
    "unicorn/prefer-global-this": "off",
    "unicorn/prefer-node-protocol": "off",
    "unicorn/prefer-export-from": "off",
    "no-process-env": "off",
    "array-callback-return": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "simple-import-sort/imports": "off",
    "simple-import-sort/exports": "off",
    "react/function-component-definition": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/consistent-type-imports": "off"
    }
  }
]
