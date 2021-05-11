# Bookmark - Diário

---
> ## Sprint 1
---

## Reunião 1

### Data: 04/03/2021

#### Resumo

Determinamos o projeto e discutimos as suas funcionalidades e a sua interface. Decidimos desenvolver um app mobile para o usuário e uma interface web para o administrador do sistema. Abordamos sobre a linguagem que será utilizada na construção do mesmo e seus frameworks. Além disso, foram criados o repositório do github, o zenhub, os requisitos do sistema e o modelo relacional.

###### Linguagem definida
Javascript
###### Frameworks
Node.js, React e React Native

#### Participantes
- **Ana Frozza:** Criou o modelo relacional
- **Gabriel Rocha:** Criou o repositório no github e o zenhub, auxiliou no documento de requisitos
- **Marrielly Martines:** Criou o documento de requisitos
- **Wiliam Consentino:** Responsável pelo diário


## Reunião 2

### Data: 11/03/2021

#### Resumo

Debatemos as funcionalidades discutidas anteriormente e as dividimos para gerar histórias de usuário e adicioná-las no zenhub como issues. 

#### Participantes
- **Ana Frozza:** Criou histórias de usuário
- **Gabriel Rocha:** Adicionou as issues ao github e ao zenhub
- **Marrielly Martines:** Configurou o read.me e adicionou as issues ao github
- **Wiliam Consentino:** Responsável pelo diário


## Reunião 3

### Data: 18/03/2021

#### Resumo

Realizamos o planning poker para estimar o esforço necessário para cada história de usuário e atribuímos seus valores às issues do github e zenhub. Dividimos as issues para serem quebradas por cada integrante do grupo.

#### Participantes
- **Ana Frozza:** Responsável pela issue 5 de valor 89
- **Gabriel Rocha:** Responsável pelas issues 1 (valor 8), 3 (valor 21) e 9 (valor 5)
- **Marrielly Martines:** Responsável pelas issues 2 (valor 21), 4 (valor 13) e 8 (valor 8)
- **Wiliam Consentino:** Responsável pelas issues 6 (valor 5), 7 (valor 8) e 10 (valor 21)


## Reunião 4

### Data: 25/03/2021

#### Resumo
Foi discutido quais histórias entrariam na sprint atual, que foram dividas em tarefas e colocadas no github e zenhub. Realização da configuração do ambiente de trabalho. Discussão sobre divisão de tarefas para o início do desenvolvimento.

###### Histórias escolhidas
Foram escolhidas as seguintes histórias, consideradas básicas para o funcionamento e objetivo do app:

     - #1 Como um leitor, eu quero poder marcar a página em que parei de ler o livro de modo que eu possa saber onde parei quando retomar a leitura.
     - #10 Como uma leitora, eu quero poder ver o quanto eu li no último mês de modo que assim eu possa ter um histórico de leitura.


#### Participantes
- **Ana Frozza:** Responsável pelo CRUD dos livros 
- **Gabriel Rocha:** Responsável pela criação e hospedagem do banco de dados
- **Marrielly Martines:** Responsável pelo CRUD da estante
- **Wiliam Consentino:** Responsável pela base do projeto

### Data: 27/03/2021

#### Alterações
- **Gabriel Rocha:** Refez a base do projeto para melhor funcionalidade
- **Marrielly Martines:** Refez o diário para melhor organização



## Reunião 5

### Data: 01/04/2021
#### Status: Cancelada


### Data: 05/03/2021

#### Alterações
- **Ana Frozza:** Criou CRUD dos livros e auxiliou outros participantes 
- **Gabriel Rocha:** Criou CRUD da estante e auxiliou outros participantes
- **Marrielly Martines:** Criou CRUD da leitura e continuou CRUD dos livros e da estante
- **Wiliam Consentino:** Tentou finalizar o CRUD dos livros, porém obteve problemas com a interação com o banco de dados



## Reunião 6

### Data: 06/04/2021


#### Resumo
Foi discutido sobre o andamento do projeto:
- debatemos as dificuldades obtidas com a linguagem e a curva de aprendizado necessária para melhor desempenho no desenvolvimento
- debatemos sobre as estimativas das issues, algumas subestimadas
- definimos as próximas tarefas a serem realizadas
- iniciamos planejamento para desenvolvimento do front-end


#### Participantes
- **Ana Frozza:** Responsável por criar método para retornar o capitulo atual e capítulos finalizados
- **Gabriel Rocha e Marrielly Martines:** Responsáveis por criar método para retornar páginas lidas do capítulo atual
- **Wiliam Consentino:** Responsável por criar método que realiza histórico de leitura


## Reunião 7 - Final

### Data: 13/04/2021


#### Resumo 
Foi discutido as mudanças necessárias para a próxima sprint em relação a novos métodos para documentação, novas estratégias de implementação, e reorganização das tarefas devido a saída de um dos membros da equipe. Ficou decidido que o back-end terá pouco desenvolvimento no momento, até que o Sequelize seja implementado por completo. Além disso, as issues foram ressignificadas e o zenhub sofrerá alterações.


#### Participantes
- **Ana Frozza:** Responsável por criar novas issues e tarefas no zenhub
- **Gabriel Rocha:** Responsável por implementar o sequelize ao projeto
- **Marrielly Martines:** Responsável por por criar novas issues e tarefas no zenhub e realizar o diário


---
> ## Sprint 2
---

## Reunião 8 

### Data: 16/04/2021


#### Resumo 
Separamos as tarefas de cada um da sprint, criando um label com o nome de cada integrante para atribuir melhor as tarefas. As tarefas agora estão separadas no zenhub também como issues, mas atreladas a uma issue maior, a qual ela pertence. Notamos que acabamos não utilizando o zenhub de forma adequada, por conta de uma má interpretação do que foi pedido por parte da equipe; logo definiremos melhor a sprint para conseguirmos gerar o gráfico de burndown. 


#### Participantes
- **Ana Frozza:** 
     - ✅ Analisou as issues iniciais e separou as tarefas à elas relacionadas, criando novas issues para as mesmas
     - ✍ Começará a implementar as issues #20 (relacionada a issue #6), #21 (relacionada a issue #7), #22 (relacionada a issue #7) e #13 (relacionada a issue #1)
     - ❎ Cumpriu com tudo que se propôs a fazer
- **Gabriel Rocha:**
     - ✅ Iniciou a implementação do Sequelize no projeto
     - ✍ Continuará a implementação do Sequelize, responsável pela issue #25
     - ❎ Cumpriu com tudo que se propôs a fazer
- **Marrielly Martines:**
     - ✅ Realizou o diário
     - ✍ Começará a implementar as issues #23 (relacionada a issue #9) e #24 (relacionada a issue #3)
     - ❌ Não realizou a criação de tarefas no zenhub, pois estava com o computador na assistência técnica


## Reunião 9

### Data: 22/04/2021


#### Resumo 
Realizamos o planning poker da segunda Sprint, estimando os valores das novas issues quebradas. Reafirmamos os deveres de cada um na reunião, analisamos o gráfico de burndown e adicionamos mais issues.


#### Participantes
- **Ana Frozza:** 
     - ✅ Criou a Sprint no zenhub e gerou o gráfico de burndown; Criou 2 novas issues à medida que foi necessário; Completou as issues #20, #21 e #22
     - ✍ Continuará a implementar a issue #13 (relacionada a issue #1); Implementará as issues #26 e #27
     - ❎ Cumpriu com tudo que se propôs a fazer
     - 🌟 Realizou mais tarefas do que havia prometido
- **Gabriel Rocha:**
     - ✅ Continuou a implementação do Sequelize no projeto
     - ✍ Continuará a implementação do Sequelize, responsável pela issue #25
     - ❎ Cumpriu com tudo que se propôs a fazer
- **Marrielly Martines:**
     - ✅ Realizou o diário e começou a implementação da issue #23 (relacionada a issue #9)
     - ✍ Continuará a implementar a issue #23 e dará início a #24 (relacionada a issue #3)
     - ❎ Cumpriu com o que se propôs a fazer
     - 🔧 Teve que recomeçar o trabalho devido à formatação do pc


## Reunião 10

### Data: 29/04/2021


#### Resumo 
Discutimos o andamento do projeto e as mudanças que serão necessárias após a finalização do sequelize. Também foi debatido a prioridade do front-end, sendo decidido a interface da estante. 


#### Participantes
- **Ana Frozza:** 
     - ✅ Completou a issues #26 e #27
     - ✍ Continuará a implementar a issue #13 (relacionada a issue #1); Implementará as issues #17 e #19 (relacionadas a issue #10)
     - ❎ Cumpriu com tudo que se propôs a fazer
- **Gabriel Rocha:**
     - ✅ Continuou a implementação do Sequelize no projeto
     - ✍ Finalizará a implementação do Sequelize, responsável pela issue #25; Realizará as mudanças necessárias no código em seguida 
     - ❎ Cumpriu com tudo que se propôs a fazer
- **Marrielly Martines:**
     - ✅ Realizou o diário; Completou as issues #23 e #24; Criou 2 novas issues, a medida que foi necessário: #29, já finalizada, e #30 (relacionada a issue #18)
     - ✍ Dará início a issue #30 (relacionada a issue #18)
     - ❎ Cumpriu com tudo que se propôs a fazer


## Reunião 11 - FINAL 

### Data: 04/04/2021


#### Resumo 
Discutimos a Sprint e percebemos que mudanças deveriam ser feitas para que ela não falhasse. Não obtivemos sucesso com front-end em React Native, então trocaremos para Flutter. A issue #13 não estava de acordo com o projeto, será discutida se realmente não é necessária ou se apenas deve haver mudanças. 


#### Participantes
- **Ana Frozza:** 
     - ✅ Iniciou as issues #17 e #19
     - ✍ Continuará a implementar as issues #17 e #19 (relacionadas a issue #10)
     - 🟨 Cumpriu em partes com o que se propôs a fazer
     - 🔧 Encontrou divergências quanto à issue #13, movida ao icebox
- **Gabriel Rocha:**
     - ✅ Finalizou a implementação do Sequelize no projeto e modificou o código para ficar de acordo com o mesmo
     - ✍ Realizará a transição do front-end para o Flutter
     - ❎ Cumpriu com tudo que se propôs a fazer
- **Marrielly Martines:**
     - ✅ Começou a implementar a issue #30, porém obteve problemas com a linguagem.
     - ✍ Realizará a transição do front-end para o Flutter
     - 🟨 Cumpriu em partes com o que se propôs a fazer 
     - 🔧 Encontrou muitas dificuldades com o React Native


