'use client';
import Link from 'next/link';
import styles from './mainBanner.module.css'

export default function MainBanner() {

    return (
      <>
        <main className={styles.main}>
          <div className={styles.mainContainer}>
            <h1>
              A oportunidade 
              de ter um pedaço
              do paraíso chegou
              até você. 
            </h1>
            <Link href="/">
              <button>
                <p>RESERVE SUA UNIDADE</p>
              </button>
            </Link>
          </div>
        </main>
      </>
      );
  }