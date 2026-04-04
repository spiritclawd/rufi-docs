import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const categories = [
  {
    label: 'Games',
    products: [
      {
        name: 'guessmyNFT',
        desc: 'On-chain deduction game on Starknet. ZK proofs. No lying possible.',
        link: '/docs/guessmynft/intro',
        status: 'Live',
        dot: 'green',
      },
    ],
  },
  {
    label: 'Institutional',
    products: [
      {
        name: 'Veil',
        desc: 'Privacy + compliance infrastructure for NFTs. Built for institutional RWA capital.',
        link: '/docs/veil/intro',
        status: 'Active',
        dot: 'yellow',
      },
    ],
  },
  {
    label: 'Agents',
    products: [
      {
        name: 'AlliGo',
        desc: 'Credit bureau for AI agents. Forensics, attestations, behavioral risk scoring.',
        link: '/docs/alligo/intro',
        status: 'Stand-by',
        dot: 'off',
      },
    ],
  },
];

export default function Home() {
  return (
    <Layout title="RUFi Docs" description="Real Utility Finance Products — Documentation">
      <main className={styles.main}>

        {/* Header */}
        <div className={styles.header}>
          <div className={styles.logoRow}>
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="28" height="8" rx="2" fill="currentColor"/>
              <rect x="0" y="11" width="23" height="8" rx="2" fill="currentColor"/>
              <rect x="0" y="22" width="15" height="6" rx="2" fill="var(--ifm-color-primary)"/>
            </svg>
            <h1 className={styles.title}>RUFi Docs</h1>
          </div>
          <p className={styles.sub}>Documentation, research, and knowledge base for all RUFi products.</p>
        </div>

        {/* Products by category */}
        {categories.map((cat) => (
          <div key={cat.label} className={styles.category}>
            <p className={styles.catLabel}>{cat.label}</p>
            <div className={styles.cards}>
              {cat.products.map((p) => (
                <Link key={p.name} to={p.link} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={`${styles.dot} ${styles[p.dot]}`}/>
                    <span className={styles.cardStatus}>{p.status}</span>
                  </div>
                  <h2 className={styles.cardName}>{p.name}</h2>
                  <p className={styles.cardDesc}>{p.desc}</p>
                  <span className={styles.cardLink}>Read docs →</span>
                </Link>
              ))}
            </div>
          </div>
        ))}

      </main>
    </Layout>
  );
}
