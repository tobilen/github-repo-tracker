const prettierConfig = require('@invisionag/prettier-config-ivx');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react', 'plugin:jest/recommended'],
  plugins: ['prettier', 'jest', 'react-hooks', 'import'],
  env: {
    browser: true,
    node: true,
    jest: true,
    'jest/globals': true,
  },
  globals: {
    ga: true,
  },
  reportUnusedDisableDirectives: true,
  rules: {
    'no-restricted-syntax': [
      'error',
      { selector: 'TSEnumDeclaration', message: "Don't declare enums" },
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    'prettier/prettier': ['error', prettierConfig],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'no-undef-init': 'warn',
    'arrow-body-style': 'error',
    'import/no-unresolved': 'off',
    'no-use-before-define': ['error', { functions: false }],
    'react/sort-comp': [
      'warn',
      {
        order: [
          'type-annotations',
          'static-methods',
          'instance-variables',
          'lifecycle',
          'everything-else',
          'rendering',
        ],
        groups: {
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.tsx', '.jsx', '.js'],
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        specialLink: ['hrefLeft', 'hrefRight', 'to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        labelComponents: ['Label'],
        controlComponents: ['Input', 'Dropdown', 'RadioButton', 'Checkbox'],
        depth: 3,
      },
    ],
    'react/destructuring-assignment': [
      'error',
      'always',
      { ignoreClassFields: true },
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'never',
      },
    ],
    'import/prefer-default-export': 'off',
  },
  overrides: [
    {
      files: ['*test.*'],
      rules: {
        'require-await': 'error',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
      },
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
      ],
      rules: {
        'no-use-before-define': 'off',
        'jest/valid-expect': 'off',
        'react/jsx-filename-extension': 'off',
        'react/default-props-match-prop-types': 'off',
        'spaced-comment': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/ban-ts-ignore': 'off',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'no-useless-constructor': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/no-parameter-properties': 'error',
        '@typescript-eslint/no-use-before-define': [
          'error',
          { functions: false },
        ],
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],

        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        'import/no-named-as-default': 'off',
        'import/no-named-as-default-member': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/export': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/default': 'off',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      excludedFiles: ['*.ts', '*.tsx'],
      parser: 'babel-eslint',
      rules: {
        'react/forbid-prop-types': 'off',
        'import/no-cycle': 'off',
        'import/no-named-as-default': 'off',
        'import/no-useless-path-segments': 'off',
        'import/no-extraneous-dependencies': 'off',
        'jest/valid-expect': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
        'react/default-props-match-prop-types': 'off',
      },
    },
  ],
};
