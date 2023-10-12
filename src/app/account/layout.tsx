import { Toaster } from '@/components/ui/toaster'

export default async function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen py-2'>
        <main className='flex flex-col items-center justify-center flex-1 px-15'>
          {children}
        </main>
        <Toaster />
      </div>
    </>
  )
}
