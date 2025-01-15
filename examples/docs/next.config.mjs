/**
 * @file next.config.mjs
 * @description Next.js的配置文件，集成了Nextra文档框架
 */

import nextra from 'nextra'

/**
 * @type {Function} Nextra配置函数
 * @param {Object} config - Nextra配置对象
 * @param {boolean} config.latex - 是否启用LaTeX数学公式支持
 * @param {Object} config.search - 搜索功能配置
 * @param {boolean} config.search.codeblocks - 是否在搜索中包含代码块
 * @param {string} config.contentDirBasePath - 文档内容的基础路径
 * @returns {Function} 返回Next.js配置增强函数
 */
const withNextra = nextra({
  // 启用LaTeX数学公式支持
  latex: true,
  // 搜索功能配置
  search: {
    // 禁用代码块搜索，提高搜索性能
    codeblocks: false
  },
  // 设置文档内容的基础路径
  contentDirBasePath: '/docs'
})

/**
 * @type {Object} Next.js配置对象
 * @property {boolean} reactStrictMode - 启用React严格模式，有助于发现潜在问题
 */
export default withNextra({
  reactStrictMode: true
})
