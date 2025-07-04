import { siteConfig } from '@/lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'b569ac4fbbe84ef5bddea75d87f81594',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'jokenpo.dev',
  domain: 'nextjs-notion-starter-kit.jokenpo.it',
  author: 'Eduardo Almeida',

  // open graph metadata (optional)
  description: 'jokenpo.dev',

  // social usernames (optional)
  twitter: 'jokenpo',
  github: 'jokenpo',
  linkedin: 'eduardo-almeida',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  // isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }ß
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
  // navigationStyle: 'custom',
  // navigationLinks: [
  //   {
  //     title: 'About',
  //     pageId: '652f90365d5145eea7e122bbf44b36ae'
  //   },
  //   {
  //     title: 'Contact',
  //     pageId: '429a44fe07034df99eea141645e16bd9'
  //   }
  // ]
})
