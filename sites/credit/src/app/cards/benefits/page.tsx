'use client'

import { useRouter } from "next/navigation"
import { ChevronLeft, ChevronRight } from 'lucide-react'

import { Button, Main, Separator } from '@hanzo/ui/primitives'
import benefits from "@/content/cards/benefits"
import Link from "next/link"

const Page = () => {
  const router = useRouter()
  return (
    <Main className={'flex flex-col gap-4 pt-11'}>
      <div className='flex gap-4 items-center self-start cursor-pointer'>
        <Button size='icon' variant='ghost' onClick={() => router.back()}>
          <ChevronLeft/>
        </Button>
        <div>All Lux Benefits</div>
      </div>
      <p className="text-xs">Learn more about the exclusive benefits only available to Lux card holders and what to expect when you sign up for your Lux card.</p>
      <div className="flex flex-col w-full">
        {benefits.map(({title, icon}, index) => (
          <>
            <Separator className="bg-level-2"/>
            <Link key={index} href={`cards/benefits/${title}`} className="flex justify-between p-2">
              <div className="flex gap-2 items-center">
                {icon}
                <h5 className="whitespace-nowrap">{title}</h5>
              </div>
              <ChevronRight/>
            </Link>
          </>
        ))}
        <Separator className="bg-level-2"/>
      </div>
    </Main>
  )
}

export default Page
