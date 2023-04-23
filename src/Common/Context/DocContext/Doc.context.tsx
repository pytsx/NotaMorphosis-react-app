import React from "react";
import { IChildren } from "../../Types";
import { IDocContext, docType } from "./Doc.types";
import { v4 as uuidv4 } from 'uuid'
import { Chat, AddInput, AvatarContainer, Board, Bubble, BubbleFeed, CheckIcon, Divider, HightLigter, List, Menu, Search, Stack, Typing, Typography } from "../../../Components";
import { Button } from "../../../Components/Button";
import { ListItem } from "../../../Components/List/ListItem";
import { Tasks } from "../../../Components/Tasks";

export const DocContext = React.createContext<IDocContext>({
    currentDoc: undefined,
    handleCurrentDoc: () => { },
    docs: []
})


const lista = [
    {
        label: 'Input',
        id: uuidv4(),
        description: 'Este é um componente chamado "AddInput", que é uma entrada de texto estilizada que tem um ícone que pode ser clicável ou não. Ele é usado para receber informações do usuário em um formulário ou em uma tela de cadastro. \n O componente é composto de vários outros componentes, como "Input", "Stack", "Typography" e "HightLighter".Ele também usa os ícones "RiCheckboxBlankCircleLine" e "MdAdd" do React.O estilo do componente é definido em "AddInputStyled", que é um componente estilizado importado do pacote "@emotion/styled". \n O componente "AddInput" recebe algumas propriedades como entrada, incluindo "color", "background", "placeholder", "onChange", "value", "disabled", "hightlight" e "clickable".Ele usa a propriedade "useTheme" para obter o tema atual do aplicativo e estilizar dinamicamente o componente. \n O componente "AddInput" usa o estado React "focus" para controlar se o ícone do componente deve ser o ícone de adição ou o ícone de círculo vazio, dependendo se o componente está em foco ou não.Quando o usuário clica no ícone de adição, ele pode adicionar informações adicionais ou enviar o formulário.O componente "AddInput" também usa "HightLigter" para realçar visualmente o componente quando clicado ou quando a propriedade "hightlight" é definida como verdadeira.',
        code: `
            <AddInput/>
            `,
        scope: { AddInput }
    },
    {
        label: 'Avatar',
        id: uuidv4(),
        description: 'O componente Avatar é uma representação visual simples de um usuário ou de uma conta. Ele exibe uma letra única em um círculo colorido, usando o componente Typography para a exibição da letra. O componente Avatar recebe dois parâmetros: letter e color, que definem a letra a ser exibida e a cor de fundo do círculo, respectivamente. \n O componente é implementado com a ajuda de styled components, que define as classes CSS necessárias para exibir o avatar.AvatarStyled define o estilo para o círculo do avatar, e AvatarContainerStyled é um contêiner para garantir que o avatar seja exibido de maneira correta.\n AvatarContainer é um componente que usa Avatar, fornecendo a letra e a cor para exibir o avatar.O componente Avatar utiliza o Typography para exibir a letra dentro do círculo, e o style da letra é definido dentro do próprio componente AvatarStyled. \n Em resumo, o componente Avatar é uma representação visual simples de um usuário ou conta, e é implementado com a ajuda de styled components e Typography.Ele é altamente personalizável, permitindo que as letras e as cores sejam definidas de forma dinâmica, e pode ser facilmente integrado em outros componentes.',
        code: `
            <AvatarContainer letter='H' color='#a2000a'/>
            `,
        scope: { AvatarContainer }
    },
    {
        label: 'Board',
        id: uuidv4(),
        description: 'O componente "Board" é um componente funcional React que importa alguns hooks e outros componentes, incluindo o "BoardComponent" que é renderizado na chamada de retorno do componente "Board". O "Board" recebe uma prop "width" opcional que é usada na chamada de retorno do "BoardComponent". O "Board" também usa os hooks "useNotes" e "useTheme" para obter os estados atuais das notas e do tema, respectivamente. \n O "Board" define um estado local usando o hook "useState" do React para armazenar o valor da entrada de texto para a adição de uma nova tarefa e para alternar a visibilidade de um ícone de menu.O componente também tem dois efeitos colaterais definidos com o hook "useEffect" do React.O primeiro efeito colateral é usado para alternar a visibilidade do ícone do menu com base no tamanho atual da janela.O segundo efeito colateral é usado para adicionar um evento de teclado para a tecla "Enter" para adicionar uma tarefa ao pressionar a tecla. \n A chamada de retorno do "BoardComponent" é passada para o "onChange" e "value" props, que são usados em um campo de entrada de texto para adicionar uma nova tarefa.O "BoardComponent" usa o componente "Tasks" para renderizar as tarefas existentes e o componente "SVG" para renderizar o ícone do cabeçalho da nota. \n O "BoardComponent" é um componente funcional que recebe as propriedades "primaryColor", "secondaryColor", "note", "theme", "width", "activeMenuIcon", "onChange" e "value".O "BoardComponent" usa o componente "Stack" do Chakra UI para criar a estrutura do quadro de notas.O componente tem três pilhas(stacks): uma para o cabeçalho da nota, outra para as tarefas e outra para o campo de entrada de texto.O cabeçalho da nota inclui um ícone de menu, o ícone da nota e um rótulo da nota.A pilha de tarefas é usada para renderizar as tarefas existentes, enquanto a pilha do campo de entrada de texto é usada para adicionar novas tarefas.O componente "AddInput" é usado para o campo de entrada de texto e é desativado se a nota for a nota padrão.O componente "SVG" é usado para renderizar o ícone do cabeçalho da nota.',
        code: `
            <Board />
            `,
        scope: { Board }
    },
    {
        label: 'Bubble',
        id: uuidv4(),
        description: 'Este componente é uma função React chamada "Bubble", que recebe três propriedades: "label", "onComplete" e "className", todas do tipo "IBubble". A função retorna uma estrutura de árvore React com elementos aninhados. \n A estrutura da árvore começa com um componente "HightLigter", que envolve um componente "BubbleWrapper".Dentro do BubbleWrapper, há um div que é animado em resposta ao evento de passagem do mouse, e um componente "Stack" que contém um componente "Typing".O componente Typing é uma animação de texto, que exibe o texto do rótulo na tela como se estivesse sendo digitado. \n O componente Bubble usa o hook useState para controlar o estado de "hover".O hook useTheme é usado para acessar o tema atual.O componente recebe uma classe CSS adicional por meio da propriedade "className", que pode ser usada para estilizar o componente externamente.A propriedade "onComplete" é uma função de retorno de chamada que é acionada quando a animação do Typing é concluída.A propriedade "label" é uma string que é exibida pelo componente Typing. \n Este componente é usado para exibir uma bolha de conversa animada, com um rótulo sendo digitado lentamente na tela.A animação do rótulo é iniciada quando o mouse é movido sobre a bolha.O componente pode ser estilizado externamente por meio da classe CSS fornecida na propriedade "className".',
        code: `
            <Bubble 
                sender='system' 
                label={'aqui vamos testar o componente Bubble que se utiliza do componente Typing, HightLighter e Typography'} 
                onComplete={()=>{}}
            />            
            `,
        scope: { Bubble }
    },
    {
        label: 'Bubble Feed',
        id: uuidv4(),
        description: 'Este é um componente React chamado BubbleFeed que exibe uma lista de bolhas de chat em uma interface do usuário. Ele recebe uma propriedade "messages" que é um array contendo as mensagens a serem exibidas e cada objeto de mensagem contém uma propriedade "sender" que define se a mensagem é do usuário ou do bot e uma propriedade "message" que contém o texto da mensagem. \n O componente usa o hook useState para gerenciar o estado interno de duas variáveis: "currentIndex" que é o índice da mensagem atual sendo exibida e "bubbles" que é um array contendo as mensagens que já foram exibidas.O estado inicial de "bubbles" é definido com a primeira mensagem em "messages" para que ela seja exibida inicialmente. \n O componente usa o hook useEffect para atualizar o estado de "bubbles" sempre que "currentIndex" muda.Isso ocorre porque a exibição das bolhas é controlada pelo estado "bubbles" e precisamos adicionar novas bolhas sempre que o usuário enviar uma mensagem. \n O componente renderiza cada mensagem como uma instância do componente Bubble.Ele mapeia o array "bubbles" e para cada objeto de mensagem, cria uma instância de Bubble e passa a propriedade "label" para exibir o texto da mensagem e uma função "onComplete" que é chamada quando a animação de digitação da mensagem é concluída.',
        code: `
            <BubbleFeed />
            `,
        scope: { BubbleFeed }
    },
    {
        label: 'Button',
        id: uuidv4(),
        description: 'O componente Button é responsável por renderizar um botão que pode receber um ícone e um texto. Ele é composto por dois subcomponentes: ButtonStyled, responsável por definir o estilo do botão, e Stack, responsável por organizar os elementos internos do botão. \n A propriedade onClick é responsável por definir o comportamento do botão ao ser clicado.As propriedades position, left, right, bottom e top definem a posição do botão na tela.As propriedades width e height definem a largura e altura do botão.A propriedade sx permite passar um estilo personalizado para o componente ButtonStyled.A propriedade variant define a variante de texto a ser utilizada no botão, podendo ser h1, h2, h3, h4 ou h5.A propriedade justify define a justificação do conteúdo do botão, podendo ser start, center ou end.A propriedade icon é responsável por receber um ícone a ser exibido no botão.A propriedade center define se o texto do botão deve ser centralizado.A propriedade color define a cor do texto do botão. \n O componente ButtonStyled é um componente estilizado utilizando a biblioteca emotion/ styled.Ele é responsável por definir o estilo do botão, utilizando as propriedades passadas pelo componente Button, como position, left, right, bottom, top, width, height e isActive.O estilo do botão também é influenciado pelo tema utilizado, que é obtido por meio do hook useTheme.O botão possui um efeito de hover que altera a cor de fundo.',
        code: `
            <Button onClick={()=>{}} text='botão de teste' />
            `,
        scope: { Button }
    },
    {
        label: 'Chat',
        id: uuidv4(),
        description: 'O componente "Chat" é um componente de interface que renderiza uma caixa de chat. Ele recebe uma lista de mensagens que podem ser exibidas na caixa de chat, bem como um placeholder de mensagem para a entrada de texto. \n O componente é construído usando o React e importa outros componentes personalizados, como "AddInput", "BubbleFeed" e "Stack", além de utilizar o contexto do tema através do "useTheme". \n Ele define um estado inicial para a entrada de texto e para a lista de mensagens.O estado da entrada de texto é atualizado pelo usuário através da função "handleInput" e o estado da lista de mensagens é atualizado com o array de mensagens passado como propriedade. \n O componente é renderizado em uma pilha vertical("Stack") com largura fixa, alinhamento central e um estilo de fundo transparente com sombra.Dentro desta pilha, há outra pilha vertical que contém a lista de mensagens("BubbleFeed") e um campo de entrada de texto("AddInput").A pilha vertical tem um estilo de fundo semi- transparente com efeito de desfoque e bordas arredondadas.',
        code: `
          <Chat 
            placeholder='aqui definimos o placeholder'
            messages={
                [
                    {
                        sender: 'user', 
                         message:'como funciona a propriedade messages do Chat'
                    }, 
                    {
                        sender: 'system', 
                        message:'A propriedade messages é um array de objetos. Cada objeto possui duas propriedades: Sender e Message.',
                    }, 
                    {
                        sender: 'system', 
                        message:'A propriedade Sender é utilizada para definir o lado em que a mensagem aparece. Se for "user", a mensagem aparecerá do lado direito do chat, e se for "system", ela aparecerá do lado esquerdo.',
                    }, 
                    {
                        sender: 'system', 
                        message:'Já a propriedade Message é a mensagem que será exibida dinamicamente com o efeito de digitação.',
                    }
                ]
            }/>
            `,
        scope: { Chat }
    },
    {
        label: 'CheckIcon',
        id: uuidv4(),
        description: 'Um componente que exibe um ícone de check ou marca de seleção.',
        code: `
            <CheckIcon />
            `,
        scope: { CheckIcon }
    },
    {
        label: 'HightLighter',
        id: uuidv4(),
        description: 'Um componente que formata um trecho de texto com uma cor de destaque.',
        code: `
            <HightLighter ></HightLighter>
            `,
        scope: { HightLigter }
    },
    {
        label: 'List',
        id: uuidv4(),
        description: 'Um componente que exibe uma lista de itens.',
        code: `
            <List />
            `,
        scope: { List }
    },
    {
        label: 'List Item',
        id: uuidv4(),
        description: 'Um componente que representa um item em uma lista.',
        code: `
            <ListItem />
            `,
        scope: { ListItem }
    },
    {
        label: 'Search',
        id: uuidv4(),
        description: 'Este é um componente de pesquisa que pode ser usado para procurar por itens em uma lista ou banco de dados. Ele geralmente é composto por uma caixa de texto onde o usuário pode inserir sua consulta e um botão de pesquisa para iniciar a busca.',
        code: `
            <Search />
            `,
        scope: { Search }
    },
    {
        label: 'Stack',
        id: uuidv4(),
        description: 'O componente Stack é usado para organizar elementos em uma pilha vertical ou horizontal.Ele permite que você empilhe vários elementos um em cima do outro ou lado a lado.',
        code: `
            <Stack > </Stack>
            `,
        scope: { Stack }
    },
    {
        label: 'Tasks',
        id: uuidv4(),
        description: ' O componente Tasks é usado para exibir uma lista de tarefas ou afazeres.Ele geralmente inclui recursos como a capacidade de adicionar, remover e marcar tarefas como concluídas.',
        code: `
            <Tasks />
            `,
        scope: { Tasks }
    },
    {
        label: 'Typing',
        id: uuidv4(),
        description: 'O componente Typing é usado para exibir um efeito de digitação em uma mensagem ou texto.Ele é frequentemente usado em bate- papos, simulando a digitação em tempo real do remetente da mensagem.',
        code: `
             <Typing text='vamos testar o componente Typing' delay={210} onComplete={()=>{}} />
            `,
        scope: { Typing }
    },
    {
        label: 'Typography',
        id: uuidv4(),
        description: 'Typography: Este é um componente de tipografia que permite a exibição de texto em diferentes estilos, tamanhos e pesos.Ele pode ser usado para personalizar a aparência do texto em um aplicativo, incluindo cabeçalhos, parágrafos e outros tipos de texto.',
        code: `
            <Typography
                weight={800}
                variant='h1'
            >
             aqui temos um exemplo do componente Typography
             </Typography>
            `,
        scope: { Typography }
    },
]


export const DocProvider = ({ children }: IChildren) => {
    const [currentDoc, setCurrentDoc] = React.useState<docType | undefined>(undefined)
    const [docs, setDocs] = React.useState<docType[]>(lista)

    const handleCurrentDoc = (id: string) => {
        let newDoc = docs.filter(el => el.id == id)[0]
        setCurrentDoc(prev => prev?.id == id ? undefined : newDoc)
    }
    return (
        <DocContext.Provider value={{ currentDoc, handleCurrentDoc, docs }}>
            {children}
        </DocContext.Provider>
    )
}