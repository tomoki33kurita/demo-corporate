import React from 'react'

type Props = {
  pageTitle: string
}

const SubHeader: React.VFC<Props> = ({ pageTitle }) => {
  return (
    <div className={'h-30 p-4 bg-yellow-100'}>
      <div className={'flex w-full  justify-between'}>
        <h2 className={'p-4'}>{pageTitle}</h2>
      </div>
    </div>
  )
}

export default SubHeader
