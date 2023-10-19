"use client"
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl';


export default function Form() {
  const t = useTranslations('Index');
  return (
    <section>
        <div>
            <h1>form</h1>
        </div>
    </section>
  )
}
