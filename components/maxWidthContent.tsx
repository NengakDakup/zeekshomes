import React from 'react'

interface MaxWidthContentProps {
  children: React.ReactNode;
}

const MaxWidthContent: React.FC<MaxWidthContentProps> = ({ children }) => {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  )
}

export default MaxWidthContent