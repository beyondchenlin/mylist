/**
 * @fileoverview 根布局组件，用于定义整个应用的基础布局结构
 * @description 包含网站的元数据配置、导航栏、页脚等全局组件
 */

import { NextraLogo, VercelLogo } from '@components/icons'
import cn from 'clsx'
import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import type { FC, ReactNode } from 'react'
import './globals.css'

/**
 * @description 网站的元数据配置
 * @type {Metadata} Next.js 的元数据类型
 */
export const metadata: Metadata = {
  // 网站描述
  description: 'Make beautiful websites with Next.js & MDX.',
  // 网站基础URL
  metadataBase: new URL('https://nextra.site'),
  // SEO关键词
  keywords: [
    'Nextra',
    'Next.js',
    'React',
    'JavaScript',
    'MDX',
    'Markdown',
    'Static Site Generator'
  ],
  // 网站生成器信息
  generator: 'Next.js',
  // 应用名称
  applicationName: 'Nextra',
  // Apple WebApp 配置
  appleWebApp: {
    title: 'Nextra'
  },
  // 页面标题配置
  title: {
    absolute: '',
    template: '%s | Nextra'
  },
  // Open Graph 协议配置，用于社交媒体分享
  openGraph: {
    url: 'https://nextra.site',
    siteName: 'Nextra',
    locale: 'en_US',
    type: 'website'
  },
  // 网站图标配置
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.svg',
        type: 'image/svg+xml'
      },
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon.svg',
        type: 'image/svg+xml'
      }
    ]
  },
  // 其他元数据配置
  other: {
    'msapplication-TileColor': '#fff'
  },
  // Twitter 卡片配置
  twitter: {
    site: 'https://nextra.site'
  }
}

/**
 * @description 根布局组件
 * @component RootLayout
 * @param {Object} props - 组件属性
 * @param {ReactNode} props.children - 子组件
 */
const RootLayout: FC<{
  children: ReactNode
}> = async ({ children }) => {
  /**
   * @description 顶部通知横幅组件
   * @type {JSX.Element}
   */
  const banner = (
    <Banner dismissible={false}>
      🚧 This is WIP documentation for Nextra 4.0
    </Banner>
  )

  /**
   * @description 导航栏组件
   * @type {JSX.Element}
   * @remarks 
   * Logo修改位置：
   * 1. logo在 Navbar 组件的 logo 属性中定义
   * 2. 要修改logo文字，更改 <span>MyList</span> 中的文本
   * 3. 要修改logo样式，调整 style 对象中的属性：
   *    - fontFamily: 字体类型
   *    - fontSize: 字体大小
   *    - fontWeight: 字体粗细
   * 4. 要修改表情符号，更改 📙 为其他符号
   * 5. 要修改颜色：
   *    - 明亮模式：修改 text-black
   *    - 暗黑模式：修改 dark:text-white
   *    - 表情颜色：修改 color: '#ff3333'
   */
  const navbar = (
    <Navbar
      logo={
        <div
          style={{
            fontFamily: 'Microsoft YaHei, sans-serif', // 使用微软雅黑字体
            fontWeight: 'bold',                        // 字体加粗
            fontSize: '24px',                          // 字体大小
            display: 'flex',                           // 弹性布局
            alignItems: 'center',                      // 垂直居中对齐
            gap: '6px'                                 // 元素间距
          }}
          className="text-black dark:text-white"       // 明暗模式文字颜色
        >
          <span style={{ fontSize: '26px', color: '#ff3333' }}>📙</span>
          <span>MyList</span>
        </div>
      }
      projectLink="https://github.com/shuding/nextra"  // 项目仓库链接
    />
  )

  /**
   * @description 页脚组件
   * @type {JSX.Element}
   */
  const footer = (
    <Footer className="flex-col items-center md:items-start">
      <a
        className="x:focus-visible:nextra-focus flex items-center gap-1"
        target="_blank"
        rel="noreferrer"
        title="vercel.com homepage"
        href="https://vercel.com?utm_source=nextra.site"
      >
        Powered by
        <VercelLogo height="20" />
      </a>
      <p className="mt-6 text-xs">
        © {new Date().getFullYear()} The Nextra Project.
      </p>
    </Footer>
  )

  // 获取页面地图数据
  const pageMap = await getPageMap()

  /**
   * @description 渲染根布局
   * @returns {JSX.Element} 根布局组件
   */
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}           // 顶部通知横幅
          navbar={navbar}           // 导航栏
          pageMap={pageMap}         // 页面地图数据
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"  // 文档仓库基础路径
          editLink="Edit this page on GitHub"  // 编辑链接文本
          sidebar={{ defaultMenuCollapseLevel: 1 }}  // 侧边栏配置
          footer={footer}           // 页脚
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}

export default RootLayout
