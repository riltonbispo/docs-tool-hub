import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	devToolbar: {
    enabled: false
  },
	integrations: [
		starlight({
			title: 'ToolHub',
			social: {
				github: 'https://github.com/riltonbispo/docs-tool-hub',
			},
			sidebar: [
				{
					label: 'Começo',
					items: [
						{ label: 'Introdução', link: '/guides/introduction/' },
							//  visão geral do projeto / objetivo
						{ label: 'Casos de Uso', link: '/guides/use-case/' },
							// casos de uso
					],
				},
				{
					label: 'Requisitos e Problemas',
					items: [
						{label: 'Requisitos de Software', link: '/guides/software-requirements/'},
							// requisito funcionais e não funcionais
						{label: 'Histórico de alterações', link: '/guides/changelog/'},
						{label: 'Problemas', link: '/guides/issues/'}
					]
				},
				{
					label: 'Processos',
					items: [
						{label: 'Ciclo de desenvolvimento', link: '/guides/development-cycle'},
							// ## INCREMENTAL
								// - explicar brevemente pq escolhemos o incremental, beneficios etc...

							// ## SCRUM
								// - papeis de cada um da equipe (com foto)
								// - ciclo de desenvolvimento

							// ## Reuniões
								// - descrever as reuniões (daily, sprint...)

							// ## Ferramentas Utilizadas
								// - Trello

							// ## Desafios e Lições Aprendidas:

							// ## Conclusão
					]
				},
				{
					label: 'Instalação e Configuração',
					items: [
						{label: 'Requisitos e Instalação', link: '/guides/requirements'},
							// requisitos para rodar o projeto
					]
				},
				{
					label: 'Guia de Uso',
					items: [
						{label: 'Interfaces UI', link: '/guides/ui-interfaces'},
							// explicar interfaces
					]
				},
				{
					label: 'Arquitetura do Sistema',
					items: [
						{label: 'Visão Geral', link: '/guides/architecture-overview'},
							// visão geral da arquitetura
					]
				},	
				{
					label: 'Desenvolvimento',
					items: [
						{label: 'Tecnologias usadas', link: '/guides/technologies-used'},
							// trello, urm etc ...
						{label: 'Estrutura do código fonte', link: '/guides/codebase-structure'},
							// explicar pasta a pasta
						{label: 'Como contribuir', link: '/guides/how-to-contribute'}
					]
				},
				{
					label: 'Implementação',
					items: [
						{label: 'Deploy', link: '/guides/deployment'}
					]
				},
			],
		}),
	],
});
