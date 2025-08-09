import ProfileTabs from '@/components/settings/profileTabs'
import Header from '@/components/ui/header'
import React from 'react'

type Props = { children: React.ReactNode }

function layout({ children }: Props) {
  return (
    <>
        <div className='h-screen flex flex-col'>
                <Header />
                <div className='p-8 flex flex-1 overflow-auto gap-5'>
                    <ProfileTabs />

                    <section className='bg-white rounded-lg shadow-md w-full h-full p-4 overflow-auto'>
                        {children}
                    </section>
                </div>
            </div>
    </>
  )
}

export default layout