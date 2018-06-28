module.exports = {
	title: 'VuePress',
	description: 'A VuePress Demo',
	base: '/vue-press/',
	themeConfig: {
		nav: [
			{ text: 'guide', link: '/guide/' },
			{ text: 'foo', link: '/foo/' },
			{ text: 'bar', link: '/bar/'},
			{
				text: 'Languages',
				items: [
				  { text: 'Chinese', link: '/language/chinese' },
				  { text: 'Japanese', link: '/language/japanese' }
				]
			}
		],
		sidebar: {
      '/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],

      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
			],
			
      '/guide/': [
				{
					title: 'Group 1',
					collapsable: false,
					children: [
						'',        /* / */
						'contact',
						'about'
					]
				},
        {
					title: 'Group 2',
					children: []
				},
			],
		},
		// displayAllHeaders: true,
	}
}