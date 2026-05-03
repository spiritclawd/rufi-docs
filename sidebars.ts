import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guessmynftSidebar: [
    'guessmynft/intro',
    'guessmynft/how-to-play',
    'guessmynft/solo-mode',
    'guessmynft/tournaments',
    'guessmynft/game-modes',
    'guessmynft/zk-proofs',
    'guessmynft/collector-mode',
    'guessmynft/protocol-economics',
    'guessmynft/community-flywheel',
    'guessmynft/expected-results',
    'guessmynft/roadmap',
    'guessmynft/skills',
    {
      type: 'category',
      label: 'For Collection Owners',
      items: [
        'guessmynft/collections/integrate',
        'guessmynft/collections/guessability-index',
      ],
    },
    {
      type: 'category',
      label: 'Research',
      items: [
        'guessmynft/research/guessability-index',
        'guessmynft/research/wager-theory',
      ],
    },
    {
      type: 'category',
      label: 'Trait Engine',
      items: [
        'guessmynft/trait-engine/index',
        'guessmynft/trait-engine/theory',
      ],
    },
  ],
  veilSidebar: [
    'veil/intro',
    'veil/for-institutions',
    'veil/competitive-landscape',
    'veil/technical-architecture',
  ],
  alligoSidebar: [
    'alligo/intro',
  ],
  shadowVaultSidebar: [
    'shadow-vault/intro',
    'shadow-vault/privacy-model',
    'shadow-vault/architecture',
    'shadow-vault/sdk',
    'shadow-vault/business-model',
  ],
};

export default sidebars;