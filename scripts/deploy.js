import { publish } from 'gh-pages';

publish(
	'build',
	{
		branch: 'gh-pages',
		repo: 'https://github.com/AngelNext/spybot-docs.git',
		user: {
			name: 'AngelNext',
			email: 'angelgz.vazquez@gmail.com'
		},
		dotfiles: true
	},
	() => console.log('Deploy Complete!')
);
