# Firefox-Security-Plugin
## Feito por: Gabriel Kabbani

### Descrição:

Com este plugin feito para o Firefox, é possível analisar a segurança de um site ao navegar na web. Para isso, pode-se ver quais são os cookies injetados no carregamento da página, quais dados estão sendo armazenados (local storage), e conexões a domínios de terceira parte. Com base nesses fatores também é disponibilizado um rating final sobre a segurança do site. Quanto mais alto o rating, maior é a incidência dos fatores mencionados acima, e portanto menor é a segurança do site em questão.

### Installing:

Para carregar o plugin, basta baixar os conteúdos deste repositório e seguir os passos abaixo:
  1. Baixar Firefox.
  2. Digitar "about:debugging" na barra de pesquisa.
  3. Clicar em "Este Firefox".
  4. Clicar em "Carregar extensão temporária..."
  5. Carregar o arquivo "manifest.json" que está dentro da pasta baixada do repositório.
  6. Entrar em um site e clicar na extensão para conferir a segurança!

### Metodologias:

Para a construção deste plugin, foram necessários alguns procedimentos: 
  1. Fazer um scrapping do HTML da página para ter acesso aos domínios de terceiros que estão ativos.
  2. Obtenção do local storage sendo utilizado no browser durante o acesso à página.
  3. Utilização da API Javascript para Firefox (https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies) que permite a obtenção dos cookies que foram injetados no carregamento da página. Estes cookies são então segregados entre 1st e 3rd party, e se são cookies de sessão ou navegação ao ver se o domínio do cookie apresenta características como "www".
  4. Para o cálculo do score, foi ponderado o número de cookies + número de instânceas de armazenamento local / 2 + número de conexões a domínios terceiros / 3. Com este resultado multiplicado por 1000, é obtido o rating.
