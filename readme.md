# Gatsby HTML Comments

When trying to add HTML comments to Gatsby, they get removed or encoded as string.

This plugin adds comments after Gatsby's build process finishes, replacing specificied custom tags with whatever code the user needs.

*This was created because of the need to insert SSI comments inside Gatsby*

## Installation

`yarn add gatsby-plugin-html-comments` or `npm install gatsby-plugin-html-comments`

## Usage

Add the plugin to your `gatsby-config.js` file, preferably at the last, after (almost) every other plugin.

```javascript
module.exports = {
  {
    resolve: `gatsby-plugin-html-comments`,
    options: {
      files: ['./public/**/*.html', './public/*.html'],
      comment: [
        {
	  // Replace 'custom-tag'
          regexp: /<custom-tag>(.*?)<\/custom-tag>/g,
          // Replace 'comment'
	  comment: `<!--comment-->`,
          },
      ]
    }
  },
}
```

### Options

- **files**: Array of filepaths. The replacer will look on each of these and replace the custom tag with the comment.
- **comment**: Array of objects.
  - **regexp**: Regular expression with a chosen custom tag. Important: always lowercase and hyphen separated to avoid issues.
  - **comment**: The comment or code you want to insert in the final file.

You can add as many comment objects as you see fit, depending on how many substitutions  you need to make.

## Example

### Without the plugin:

Original code:

```javascript
return (
  <div>
    <!-- keep this comment! -->
    <h1>Hello World</h1>
  </div>
)
```

Result: the comment either gets fuzzy...

```html
<div>
  %3C%21--%20keep%20this%20comment%21%20--%3E
  <h1>Hello World</h1>
</div>
```

or the comment gets removed entirely.

### With the plugin:

Original code:

```javascript
return (
  <div>
    <keep-this-comment-tag></keep-this-comment-tag>
    <h1>Hello World</h1>
  </div>
)
```

Result:

```html
  <div>
    <!-- keep this comment! -->
    <h1>Hello World</h1>
  </div>
```

Config in `gatsby-config.js`:

```javascript
module.exports = {
  {
    resolve: `gatsby-plugin-html-comments`,
    options: {
      files: ['./public/**/*.html', './public/*.html'],
      comment: [
        {
          regexp: /<keep-this-comment-tag>(.*?)<\/keep-this-comment-tag>/g,
          comment: `<!-- keep this comment! -->`,
          },
      ]
    }
  }
}
```
## Contributions

... [are accepted through Github](https://github.com/angelod1as/gatsby-plugin-html-comments), from improvements on the code itself to making this readme better : )
