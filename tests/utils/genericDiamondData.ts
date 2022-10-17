type Diamonds = {
  [key: string]: {
    data: string[];
    patterns: {
      [key: string]: string[];
    };
  };
};

const genericDiamondData: Diamonds = {
  NumberedDiamond: {
    data: ['1', '2', '3', '4', '5'],
    patterns: {
      1: ['1'],
      2: [' 1', '2 2', ' 1'],
      3: ['  1', ' 2 2', '3   3', ' 2 2', '  1'],
      4: ['   1', '  2 2', ' 3   3', '4     4', ' 3   3', '  2 2', '   1'],
      5: [
        '    1',
        '   2 2',
        '  3   3',
        ' 4     4',
        '5       5',
        ' 4     4',
        '  3   3',
        '   2 2',
        '    1',
      ],
    },
  },
  AlphabeticalDiamond: {
    data: ['A', 'B', 'C', 'D', 'E'],
    patterns: {
      A: ['A'],
      B: [' A', 'B B', ' A'],
      C: ['  A', ' B B', 'C   C', ' B B', '  A'],
      D: ['   A', '  B B', ' C   C', 'D     D', ' C   C', '  B B', '   A'],
      E: [
        '    A',
        '   B B',
        '  C   C',
        ' D     D',
        'E       E',
        ' D     D',
        '  C   C',
        '   B B',
        '    A',
      ],
    },
  },
  PawedDiamond: {
    data: ['#', '#', '#', '#', '#'],
    patterns: {
      '#': [
        '    #',
        '   # #',
        '  #   #',
        ' #     #',
        '#       #',
        ' #     #',
        '  #   #',
        '   # #',
        '    #',
      ],
    },
  },
  SpecialCharactersDiamond: {
    data: ['!', '#', '$', '%', '&'],
    patterns: {
      '!': ['!'],
      '#': [' !', '# #', ' !'],
      $: ['  !', ' # #', '$   $', ' # #', '  !'],
      '%': ['   !', '  # #', ' $   $', '%     %', ' $   $', '  # #', '   !'],
      '&': [
        '    !',
        '   # #',
        '  $   $',
        ' %     %',
        '&       &',
        ' %     %',
        '  $   $',
        '   # #',
        '    !',
      ],
    },
  },
};

export default genericDiamondData;
