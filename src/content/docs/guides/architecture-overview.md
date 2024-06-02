---
title: Visão Geral
description: Lorem Ipsum is simply dummy
---

A arquitetura do sistema é baseada em um frontend desenvolvido em Next.js, que consome um arquivo JSON contendo os dados das ferramentas de engenharia de software. Essa abordagem simplificada permite uma implementação mais rápida e fácil, adequada para um projeto de escopo menor.

### Componentes Principais

- **Frontend**: Desenvolvido em Next.js, o frontend da plataforma é responsável por fornecer uma interface de usuário intuitiva e responsiva.

- **Dados das Ferramentas**: As informações sobre as ferramentas de engenharia de software são armazenadas em um arquivo JSON, que é consumido pelo frontend para exibição na plataforma.

### Diagrama Entidade-Relacionamento (ER)

O diagrama ER abaixo representa as principais entidades e seus relacionamentos no sistema:
![diagrama entidade](https://dhg1h5j42swfq.cloudfront.net/2021/05/10192407/image-226.png)

### Modelo de Banco de Dados

##### `techs`

| Coluna       | Tipo    | Descrição                                       |
|--------------|---------|-------------------------------------------------|
| id           | VARCHAR  | Identificador único da tecnologia (chave primária) |
| name         | VARCHAR | Nome da tecnologia                              |
| bio          | TEXT    | Biografia da tecnologia                         |
| description  | TEXT    | Descrição da tecnologia                         |
| image_url    | TEXT    | URL da imagem da tecnologia                     |

##### `tags`

| Coluna       | Tipo    | Descrição                                       |
|--------------|---------|-------------------------------------------------|
| id           | VARCHAR  | Identificador único da tag (chave primária)    |
| name         | VARCHAR | Nome da tag                                     |

##### `techs_tags`

| Coluna       | Tipo    | Descrição                                       |
|--------------|---------|-------------------------------------------------|
| tech_id      | INT     | ID da tecnologia (chave estrangeira para `techs`) |
| tag_id       | INT     | ID da tag (chave estrangeira para `tags`)       |
