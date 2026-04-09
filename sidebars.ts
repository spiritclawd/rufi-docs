import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  guessmynftSidebar: [
    'guessmynft/intro',
    'guessmynft/how-to-play',
    'guessmynft/game-modes',
    'guessmynft/zk-proofs',
    'guessmynft/collector-mode',
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
};

export default sidebars;
