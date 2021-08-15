import Link from 'next/link'
import React from 'react'

const Header: React.VFC = () => {
  return (
    <header className={'h-20 p-4 bg-blue-500	'}>
      <div className={'flex w-full'}>
        <div className={'p-4 col-start-auto'}>
          <Link href="/">
            <a>i studio</a>
          </Link>
        </div>
        <nav className={'col-end-auto'}>
          <ul className={'flex'}>
            <li className={'p-4'}>
              <Link href="/products">
                <a>製品一覧</a>
              </Link>
            </li>
            <li className={'p-4'}>
              <Link href="/agancy">
                <a>お取扱店</a>
              </Link>
            </li>
            <li className={'p-4'}>
              <Link href="/about">
                <a>会社概要</a>
              </Link>
            </li>
            <li className={'p-4'}>
              <Link href="/contact">
                <a>お問い合わせ</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
