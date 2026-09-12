
const ED=new Date('2027-01-17T00:00:00-03:00');
const GTI='https://www.grancursosonline.com.br/aluno/curso/s/tce-go-tribunal-de-contas-do-estado-de-goias-tecnico-de-controle-externo-especialidade-tecnologiia-da-informacao-pos-edital';
const GGE='https://www.grancursosonline.com.br/aluno/curso/s/tce-go-tribunal-de-contas-do-estado-de-goias-tecnico-de-controle-externo-especialidade-tecnologia-da-informacao-pos-edital-conhecimentos-gerais';
const QC='https://qconcursos.com';
const S1='https://open.spotify.com/show/0PjhgXuoOTeB69AyCDv04b';
const S2='https://open.spotify.com/show/7HL8GWWGjzjxCM0nHFKBWO';
const S3='https://open.spotify.com/show/7e8MtEQu55Z22k7SRy8YBr';
const S4='https://open.spotify.com/show/3dxqEqDPu2cHbIOqDxG5cC';

// STATE
function ld(){try{return JSON.parse(localStorage.getItem('tcego27')||'{}');}catch{return{};}}
function sv(){localStorage.setItem('tcego27',JSON.stringify(ST));}
let ST=ld();
['tasks','topics','gran','sessions'].forEach(k=>{if(!ST[k])ST[k]=k==='sessions'?[]:{}});
if(!ST.quiz)ST.quiz=0;if(!ST.note)ST.note='';

// PLANO HOJE
const PH={
'2026-09-12':{t:'Início — Sábado 1: Primeiro Simulado + Estudo de Caso',te:'Diagnóstico + Discursiva',c:{p:'Dir. Administrativo 2025 do Zero — Ep.1',u:S1},a:{m:'HOJE: Diagnóstico — 20 questões mistas FCC (sem filtro de tema)',u:QC},n:[{t:'Simulado diagnóstico: 25 questões gerais FCC — veja seu nível atual',d:'QConcursos → banca FCC → sem filtro',tp:'g'},{t:'Estudo de Caso 1: incidente de segurança (leia o cenário na aba Discursiva)',d:'Prova Discursiva — treino 1',tp:'t'},{t:'Anotações: o que você acertou e o que precisa estudar',d:'Aba Notas',tp:'g'}]},
'2026-09-13':{t:'Domingo 1 — Português + Legislação TCE-GO',te:'Base obrigatória',c:{p:'Dir. Administrativo 2025 do Zero — Ep.2',u:S1},a:{m:'15 questões FCC — Interpretação de Texto',u:QC},n:[{t:'Interpretação de Textos — Apresentação',d:'Gran → Gerais → Língua Portuguesa',tp:'g'},{t:'Semântica — Significação Literal e Contextual',d:'Gran → Gerais → Língua Portuguesa',tp:'g'},{t:'Legislação Institucional — Apresentação da disciplina',d:'Gran → Gerais → Legislação',tp:'g'}]},
'2026-09-14':{t:'Segunda — Português + Legislação',te:'Língua Portuguesa + Legislação TCE-GO',c:{p:'Dir. Administrativo 2025 do Zero — Ep.3',u:S1},a:{m:'15 questões FCC — Legislação Tribunais de Contas',u:QC},n:[{t:'Proposições Lógicas I e II',d:'Gran → Gerais → Matemática e Raciocínio Lógico',tp:'g'},{t:'Da Administração Pública I — CF/88',d:'Gran → Gerais → Legislação Institucional',tp:'g'},{t:'15 questões FCC — Raciocínio Lógico',d:'QConcursos → Lógica → FCC',tp:'g'}]},
'2026-09-15':{t:'Terça — Redes OSI + Matemática',te:'Redes + Lógica',c:{p:'Dir. Administrativo 2025 do Zero — Ep.4',u:S1},a:{m:'15 questões FCC — Modelo OSI',u:QC},n:[{t:'Modelos OSI e TCP/IP — Introdução',d:'Gran → TI → Sistemas Op., Redes e Cloud',tp:'t'},{t:'OSI — Camada Física + Camada de Enlace',d:'Gran → TI → Redes',tp:'t'},{t:'Porcentagem I e II',d:'Gran → Gerais → Matemática',tp:'g'}]},
'2026-09-16':{t:'Quarta — Redes + CF/88 + Concordância',te:'Redes + Legislação + Português',c:{p:'Dir. Administrativo 2025 do Zero — Ep.5',u:S1},a:{m:'15 questões FCC — Camadas OSI',u:QC},n:[{t:'OSI — Camadas de Rede e Transporte',d:'Gran → TI → Redes',tp:'t'},{t:'Da Administração Pública II e III — CF/88',d:'Gran → Gerais → Legislação',tp:'g'},{t:'Concordância Verbal I',d:'Gran → Gerais → Português',tp:'g'}]},
'2026-09-17':{t:'Quinta — Redes + LGPD + Português',te:'Redes + LGPD + Português',c:{p:'Leis para Concursos em Áudio — Ep.1',u:S2},a:{m:'15 questões FCC — LGPD',u:QC},n:[{t:'OSI — Sessão, Apresentação, Aplicação',d:'Gran → TI → Redes',tp:'t'},{t:'LGPD — Lei 13.709/2018 — Partes I e II',d:'Gran → TI → Legislação TI',tp:'t'},{t:'Concordância Verbal II e III',d:'Gran → Gerais → Português',tp:'g'}]},
'2026-09-18':{t:'Sexta — Segurança + Regência + Crase',te:'Segurança + Português',c:{p:'Leis para Concursos em Áudio — Ep.2',u:S2},a:{m:'15 questões FCC — Segurança da Informação',u:QC},n:[{t:'Segurança da Informação: Conceitos I e II',d:'Gran → TI → Segurança da Informação',tp:'t'},{t:'Regência Verbal I e II',d:'Gran → Gerais → Português',tp:'g'},{t:'Crase I e II',d:'Gran → Gerais → Português',tp:'g'}]},
'2026-09-19':{t:'Sábado 2 — Simulado + Redação Oficial',te:'Simulado semanal + Discursiva',c:{p:'Leis para Concursos em Áudio — Ep.3',u:S2},a:{m:'SIMULADO: 25 questões gerais FCC cronometrado',u:QC},n:[{t:'Simulado: 45 questões TI FCC — 2h cronometrado',d:'QConcursos → TI → FCC',tp:'t'},{t:'Redação Oficial — Definição + Padrão Ofício I e II',d:'Gran → Gerais → Português',tp:'g'},{t:'Estudo de Caso 2: adequação à LGPD (aba Discursiva)',d:'Prova Discursiva',tp:'t'}]},
'2026-09-20':{t:'Domingo 2 — COBIT 2019 + Revisão',te:'COBIT + Revisão semana 1',c:{p:'Leis para Concursos em Áudio — Ep.4',u:S2},a:{m:'15 questões FCC — COBIT 2019',u:QC},n:[{t:'COBIT 2019 — Conceitos Gerais',d:'Gran → TI → Governança de TI',tp:'t'},{t:'COBIT 2019 — Domínios de Gestão I e II',d:'Gran → TI → Governança de TI',tp:'t'},{t:'Revisão: releia resumos da semana 1',d:'Aba Notas',tp:'g'}]},
'2026-09-21':{t:'Segunda — COBIT + Código de Ética TCE-GO',te:'COBIT + Legislação TCE-GO',c:{p:'Dir. Administrativo Direto — Ep.1',u:S3},a:{m:'15 questões FCC — Legislação TCE-GO',u:QC},n:[{t:'COBIT 2019 — Domínios III, IV e V',d:'Gran → TI → Governança de TI',tp:'t'},{t:'Código de Ética Servidores TCE-GO I e II',d:'Gran → Gerais → Legislação',tp:'g'},{t:'15 questões FCC — Governança TI',d:'QConcursos → COBIT → FCC',tp:'t'}]},
'2026-09-22':{t:'Terça — ITIL v4 + Lei Orgânica TCE-GO',te:'ITIL + Legislação TCE-GO',c:{p:'Café com ITIL — Ep.1',u:S4},a:{m:'15 questões FCC — ITIL v4',u:QC},n:[{t:'ITIL 4 — Introdução + SVS',d:'Gran → TI → Governança de TI',tp:'t'},{t:'Lei Orgânica TCE-GO I e II (Lei 16.168/2007)',d:'Gran → Gerais → Legislação',tp:'g'},{t:'15 questões FCC — Tribunais de Contas',d:'QConcursos → Legislação → FCC',tp:'g'}]},
'2026-09-23':{t:'Quarta — ITIL Práticas + Banco de Dados',te:'ITIL + BD',c:{p:'Café com ITIL — Ep.2',u:S4},a:{m:'15 questões FCC — Banco de Dados',u:QC},n:[{t:'ITIL 4 — Cadeia de Valor + Práticas I e II',d:'Gran → TI → Governança de TI',tp:'t'},{t:'Banco de Dados — Conceitos Iniciais',d:'Gran → TI → Banco de Dados',tp:'t'},{t:'Lei Orgânica TCE-GO III e IV',d:'Gran → Gerais → Legislação',tp:'g'}]},
'2026-09-24':{t:'Quinta — BD MER + Regimento Interno',te:'Banco de Dados + Regimento',c:{p:'Café com ITIL — Ep.3',u:S4},a:{m:'15 questões FCC — SQL e MER',u:QC},n:[{t:'Banco de Dados — MER I e II',d:'Gran → TI → Banco de Dados',tp:'t'},{t:'SQL — Linguagem SQL I e II',d:'Gran → TI → Banco de Dados',tp:'t'},{t:'Regimento Interno TCE-GO I e II',d:'Gran → Gerais → Legislação',tp:'g'}]},
'2026-09-25':{t:'Sexta — Cloud Computing + Matemática',te:'Cloud + Matemática',c:{p:'Café com ITIL — Ep.4',u:S4},a:{m:'15 questões FCC — Cloud Computing',u:QC},n:[{t:'Cloud — Introdução + Características + Modelos I',d:'Gran → TI → Sistemas Op., Redes e Cloud',tp:'t'},{t:'Frações I, II e III',d:'Gran → Gerais → Matemática',tp:'g'},{t:'Razão e Proporção I e II',d:'Gran → Gerais → Matemática',tp:'g'}]},
'2026-09-26':{t:'Sábado 3 — Simulado + Estudo de Caso',te:'Simulado + Discursiva',c:{p:'Café com ITIL — Ep.5',u:S4},a:{m:'SIMULADO: 25 gerais + 45 TI FCC cronometrado',u:QC},n:[{t:'Simulado completo: 70 questões FCC — 3h cronometrado',d:'QConcursos → filtro FCC',tp:'t'},{t:'Revisão dos erros do simulado — 1h',d:'Anota os temas com menor acerto',tp:'g'},{t:'Estudo de Caso 3: cloud híbrida (aba Discursiva)',d:'Prova Discursiva',tp:'t'}]},
'2026-09-27':{t:'Domingo 3 — COBIT Avançado + Revisão',te:'COBIT + Revisão',c:{p:'Café com ITIL — Ep.6',u:S4},a:{m:'20 questões FCC — COBIT + ITIL',u:QC},n:[{t:'COBIT 2019 — Princípios I e II + Cascata de Metas',d:'Gran → TI → Governança de TI',tp:'t'},{t:'COBIT 2019 — Área de Foco e Fatores de Design',d:'Gran → TI → Governança de TI',tp:'t'},{t:'Revisão semana 2 — resumos de 1 página',d:'Aba Notas',tp:'g'}]},
'2026-09-28':{t:'Segunda — ISO 27001 + Conectivos Lógicos',te:'Segurança avançada + Lógica',c:{p:'Dir. Administrativo Direto — Ep.2',u:S3},a:{m:'20 questões FCC — Segurança ISO 27001',u:QC},n:[{t:'ISO/IEC 27001:2022 — SGSI I e II',d:'Gran → TI → Segurança da Informação',tp:'t'},{t:'ISO/IEC 27005:2023 — Gestão de Riscos I',d:'Gran → TI → Segurança da Informação',tp:'t'},{t:'Conectivos Lógicos — Condicional + Bicondicional',d:'Gran → Gerais → Matemática',tp:'g'}]},
'2026-09-29':{t:'Terça — ISO 27002 + Banco de Dados SQL',te:'Segurança + BD avançado',c:{p:'Dir. Administrativo Direto — Ep.3',u:S3},a:{m:'20 questões FCC — SQL avançado',u:QC},n:[{t:'ISO/IEC 27002:2022 — Controles I e II',d:'Gran → TI → Segurança da Informação',tp:'t'},{t:'SQL — JOIN, GROUP BY, subconsultas',d:'Gran → TI → Banco de Dados',tp:'t'},{t:'Pontuação I e II',d:'Gran → Gerais → Português',tp:'g'}]},
'2026-09-30':{t:'Quarta — Revisão setembro + Simulado',te:'Revisão total de setembro',c:{p:'Dir. Administrativo Direto — Ep.4',u:S3},a:{m:'SIMULADO: 20 questões legislação TCE-GO FCC',u:QC},n:[{t:'Revisão: Lei Orgânica + Regimento + Código de Ética',d:'Gran → Gerais → Legislação',tp:'g'},{t:'Revisão: COBIT + ITIL + ISO 27001 + Redes',d:'Gran → TI',tp:'t'},{t:'Resumo de 1 página de cada tema de setembro',d:'Aba Notas — salva no Drive',tp:'g'}]},
};

const SEMANA=[
{id:'sab',n:'Sábado',t:'Simulado completo + Estudo de Caso',c:{p:'Podcast da semana',u:S1},a:{m:'SIMULADO: 25 questões gerais FCC cronometrado',u:QC},ns:[{t:'Simulado TI: 45 questões FCC — 2h cronometrado',d:'QConcursos → TI → FCC',tp:'t'},{t:'Revisão dos erros do simulado',d:'Anota os temas com menor acerto',tp:'g'},{t:'Estudo de Caso escrito — 50 min (aba Discursiva)',d:'Prova Discursiva',tp:'t'}]},
{id:'dom',n:'Domingo',t:'Revisão + COBIT/ITIL + Questões extras',c:{p:'Café com ITIL',u:S4},a:{m:'20 questões FCC — tema mais fraco da semana',u:QC},ns:[{t:'Governança TI — COBIT 2019 ou ITIL v4',d:'Gran → TI → Governança de TI',tp:'t'},{t:'Revisão da semana — resumos de 1 página',d:'Aba Notas → salva no Drive',tp:'g'},{t:'Legislação TCE-GO — 15 questões FCC',d:'QConcursos → Legislação → FCC',tp:'g'}]},
{id:'seg',n:'Segunda',t:'Português + Legislação TCE-GO',c:{p:'Dir. Administrativo 2025 do Zero',u:S1},a:{m:'15 questões FCC — Legislação TCE-GO',u:QC},ns:[{t:'Língua Portuguesa — aula do dia',d:'Gran → Gerais → Língua Portuguesa',tp:'g'},{t:'Legislação Institucional — aula do dia',d:'Gran → Gerais → Legislação',tp:'g'},{t:'20 questões FCC — Português + Legislação',d:'QConcursos → FCC',tp:'g'}]},
{id:'ter',n:'Terça',t:'Redes/TI do mês + Matemática e Lógica',c:{p:'Leis para Concursos em Áudio',u:S2},a:{m:'15 questões FCC — Redes ou TI do mês',u:QC},ns:[{t:'TI — disciplina do mês (Redes, Segurança, Cloud...)',d:'Gran → TI → disciplina atual',tp:'t'},{t:'Matemática e Raciocínio Lógico',d:'Gran → Gerais → Matemática',tp:'g'},{t:'20 questões FCC — TI + Lógica',d:'QConcursos → FCC',tp:'t'}]},
{id:'qua',n:'Quarta',t:'Segurança/TI do mês + Legislação TCE-GO',c:{p:'Dir. Administrativo Direto',u:S3},a:{m:'15 questões FCC — Segurança ou TI',u:QC},ns:[{t:'TI — continuação da disciplina do mês',d:'Gran → TI → disciplina atual',tp:'t'},{t:'Legislação Institucional — Lei Orgânica TCE-GO',d:'Gran → Gerais → Legislação',tp:'g'},{t:'20 questões FCC — Segurança + Legislação',d:'QConcursos → FCC',tp:'t'}]},
{id:'qui',n:'Quinta',t:'Banco de Dados + Português',c:{p:'Café com ITIL',u:S4},a:{m:'15 questões FCC — Banco de Dados e SQL',u:QC},ns:[{t:'Banco de Dados — disciplina do dia',d:'Gran → TI → Banco de Dados',tp:'t'},{t:'Língua Portuguesa — continuação',d:'Gran → Gerais → Português',tp:'g'},{t:'20 questões FCC — BD + Português',d:'QConcursos → FCC',tp:'t'}]},
{id:'sex',n:'Sexta',t:'COBIT/ITIL + Matemática e Lógica',c:{p:'Café com ITIL',u:S4},a:{m:'15 questões FCC — Governança TI',u:QC},ns:[{t:'Governança TI — COBIT 2019 ou ITIL v4',d:'Gran → TI → Governança de TI',tp:'t'},{t:'Matemática e Raciocínio Lógico',d:'Gran → Gerais → Matemática',tp:'g'},{t:'20 questões FCC — COBIT + Lógica',d:'QConcursos → FCC',tp:'t'}]},
];

const MESES=[
{m:'SETEMBRO/2026 — Fase 1',c:'#e84545',s:[
{l:'S1 (12–18/09) — INÍCIO',t:'Diagnóstico + Português + Redes OSI + LGPD + Concordância + COBIT início',mt:'50 questões FCC + 1 estudo de caso',lk:GGE},
{l:'S2 (19–25/09)',t:'ITIL v4 SVS + Lei Orgânica TCE-GO + BD MER + Cloud + Matemática',mt:'80 questões FCC + 1 simulado + 1 estudo de caso',lk:GTI},
{l:'S3 (26/09–02/10)',t:'ISO 27001 + ISO 27005 + BD SQL + COBIT avançado + Regimento Interno',mt:'100 questões FCC + 1 simulado completo',lk:GTI},
]},
{m:'OUTUBRO/2026 — Fase 2',c:'#f0a500',s:[
{l:'S4 (03–09/10)',t:'ISO 27002 Controles + Cloud AWS/Azure + LGPD completo + Português revisão',mt:'80 questões FCC + 1 simulado',lk:GTI},
{l:'S5 (10–16/10)',t:'DevSecOps + Docker + Kubernetes + CI/CD + Banco de Dados avançado',mt:'80 questões FCC + 1 simulado + 1 estudo de caso',lk:GTI},
{l:'S6 (17–23/10)',t:'COBIT cascata de metas + 40 objetivos + Oracle + PostgreSQL',mt:'80 questões FCC + 1 simulado',lk:GTI},
{l:'S7 (24–30/10)',t:'Engenharia de Software + Scrum + UML + Testes + CMMI',mt:'100 questões FCC + 1 simulado completo 70q',lk:GTI},
]},
{m:'NOVEMBRO/2026 — Fase 3',c:'#a855f7',s:[
{l:'S8 (31/10–06/11)',t:'POO + APIs REST + Padrões GOF + Zero Trust + Microsserviços',mt:'80 questões FCC + 1 simulado',lk:GTI},
{l:'S9 (07–13/11)',t:'IA Generativa + LLMs + RAG + Engenharia de Prompts',mt:'80 questões FCC + 1 simulado + 1 estudo de caso',lk:GTI},
{l:'S10 (14–20/11)',t:'Revisão geral — todos os temas com menor acerto nos simulados',mt:'100 questões temáticas + 1 simulado completo',lk:GTI},
{l:'S11 (21–30/11)',t:'Inglês Técnico + Eng. Software IA + revisão final de conteúdo',mt:'100 questões + simulado + 2 estudos de caso',lk:GTI},
]},
{m:'DEZEMBRO/2026 — Fase 4: Simulados',c:'#00e5a0',s:[
{l:'S12 (01–11/12)',t:'ZERO conteúdo novo — Simulados Finais I–VI + discursiva 2x/semana',mt:'Simulados completos 4h30 + estudos de caso',lk:GTI},
{l:'S13 (12–18/12)',t:'Simulados Finais VII–XII + revisão legislação TCE-GO',mt:'Simulados + revisão seletiva dos erros',lk:GTI},
{l:'S14 (19–25/12)',t:'Simulados Finais XIII–XVIII + revisão COBIT + ITIL',mt:'Simulados + resumos de 1 página',lk:GTI},
]},
{m:'JANEIRO/2027 — Fase 5: Reta Final',c:'#3d7eff',s:[
{l:'S15 (26/12–01/01)',t:'Simulados Finais XIX–XXIV + revisão legislação',mt:'Simulados + revisão resumos',lk:GTI},
{l:'S16 (02–08/01)',t:'Simulados Finais XXV–XXVIII + último estudo de caso',mt:'Simulados + revisão temática',lk:GTI},
{l:'S17 (09–15/01)',t:'Revisão leve — só resumos de 1 página. Sem conteúdo novo.',mt:'20 questões/dia de manutenção',lk:GGE},
{l:'16/01 — VÉSPERA',t:'NÃO ESTUDE. Organize documentos, confira local da prova, durma cedo.',mt:'Descanso total',lk:GGE},
{l:'17/01/2027 — 🎯 PROVA',t:'Chegue 30 min antes. RG + caneta preta + água. Você se preparou.',mt:'4h30 — 70 questões + estudo de caso',lk:GTI},
]},
];

const PLANO=[
{id:'set',n:'SETEMBRO — Base e Legislação',c:'#e84545',desc:'O mês mais crítico. Legislação zero = eliminado. Prioridade absoluta.',weeks:[
{id:'w1',l:'Semana 1',d:'12–18/set',t:'Início: Adaptação + Português + TI',tip:'Semana de adaptação. Meta: 1 aula por dia + 10 questões. Descubra seu ritmo antes de se cobrar volume.',tasks:[
{id:'t001',t:'Baixar PDF da Lei Orgânica do TCE-GO',d:'portal.tce.go.gov.br → Legislação → Lei Orgânica',b:['t'],p:true},
{id:'t002',t:'Criar conta no QConcursos',d:'qconcursos.com — filtro sempre: banca FCC',b:['t']},
{id:'t003',t:'Aula: Interpretação de Textos (Gran — Gerais)',d:'Língua Portuguesa',b:['t']},
{id:'t004',t:'10 questões FCC — Interpretação de Texto',d:'Anote quantas acertou e que tipos de erro cometeu',b:['q']},
{id:'t005',t:'Aula: Proposições Lógicas I e II (Gran — Gerais)',d:'Matemática e Raciocínio Lógico',b:['t']},
{id:'t006',t:'Aula: Engenharia de Software — Conceitos Gerais (Gran — TI)',d:'Primeiro contato com TI formal',b:['t']},
{id:'t007',t:'10 questões FCC — Proposições Lógicas',d:'QConcursos → Raciocínio Lógico → FCC',b:['q']},
]},
{id:'w2',l:'Semana 2',d:'19–25/set',t:'Redes OSI + CF/88 + Concordância',tip:'A FCC cobra modelo OSI camada por camada. Monte uma tabela: camada → função → protocolo → dispositivo.',tasks:[
{id:'t008',t:'Aula: Modelos OSI e TCP/IP (Gran — TI)',d:'Sistemas Operacionais, Redes e Cloud',b:['t'],p:true},
{id:'t009',t:'Aula: Camadas OSI — Física, Enlace, Rede, Transporte (Gran — TI)',d:'As 4 camadas mais cobradas',b:['t'],p:true},
{id:'t010',t:'20 questões FCC — Modelo OSI',d:'QConcursos → Redes → FCC',b:['q']},
{id:'t011',t:'Aula: CF/88 — Da Administração Pública I, II, III (Gran — Gerais)',d:'Artigos 37 e seguintes',b:['t'],p:true},
{id:'t012',t:'Aula: Concordância Verbal I, II e III (Gran — Gerais)',d:'Língua Portuguesa',b:['t']},
{id:'t013',t:'20 questões FCC — Concordância Verbal',d:'QConcursos → Português → FCC',b:['q']},
{id:'t014',t:'Aula: LGPD — Partes I e II (Gran — TI)',d:'Legislação Aplicada à TI',b:['t']},
]},
{id:'w3',l:'Semana 3',d:'26/set–02/out',t:'Redação Oficial + COBIT + ITIL',tip:'Redação Oficial é muito cobrada em tribunais. A FCC dá um documento mal escrito e pede para corrigir. Estude o Manual de Redação da Presidência.',tasks:[
{id:'t015',t:'Aula: Regência + Crase (Gran — Gerais)',d:'Língua Portuguesa',b:['t']},
{id:'t016',t:'Aula: Redação Oficial — Ofício, Memorando (Gran — Gerais)',d:'PRIORIDADE — muito cobrado em tribunais',b:['t'],p:true},
{id:'t017',t:'15 questões FCC — Redação Oficial',d:'QConcursos → Redação Oficial → FCC',b:['q'],p:true},
{id:'t018',t:'Aula: COBIT 2019 — Conceitos Gerais (Gran — TI)',d:'Seu maior gap teórico',b:['t'],p:true},
{id:'t019',t:'Aula: COBIT 2019 — Domínios I, II e III (Gran — TI)',d:'EDM, APO, BAI, DSS, MEA',b:['t']},
{id:'t020',t:'Aula: ITIL 4 — Introdução + SVS (Gran — TI)',d:'Você tem certificação — aprenda como a FCC cobra',b:['t']},
{id:'t021',t:'15 questões FCC — COBIT 2019',d:'QConcursos → Governança de TI → FCC',b:['q']},
]},
{id:'w4',l:'Semana 4',d:'03–09/out',t:'Lei Orgânica TCE-GO + BD + Cloud + Simulado',tip:'A Lei Orgânica é o documento mais cobrado. Leia artigo por artigo e resolva questões sobre aquele artigo antes de continuar.',tasks:[
{id:'t022',t:'Aula: Lei Orgânica TCE-GO I, II, III e IV (Gran — Gerais)',d:'Lei 16.168/2007',b:['t'],p:true},
{id:'t023',t:'20 questões FCC — Lei Orgânica e Tribunais de Contas',d:'QConcursos → Direito Administrativo → Tribunais de Contas',b:['q'],p:true},
{id:'t024',t:'Aula: Regimento Interno TCE-GO I e II (Gran — Gerais)',d:'Resolução 22/2008',b:['t']},
{id:'t025',t:'Aula: Banco de Dados — Conceitos + MER + SQL (Gran — TI)',d:'Banco de Dados',b:['t']},
{id:'t026',t:'Aula: Cloud Computing — Introdução + Modelos (Gran — TI)',d:'IaaS, PaaS, SaaS',b:['t']},
{id:'t027',t:'Simulado: 25 gerais + 20 TI — cronometrado',d:'Anote aproveitamento por área',b:['s'],p:true},
{id:'t028',t:'Revisão setembro: resumo de 1 página por tema',d:'Legislação · ITIL · COBIT · Português · Redes',b:['r']},
]},
]},
{id:'out',n:'OUTUBRO — TI Parte 1: formalizar',c:'#f0a500',desc:'Redes, Segurança, Cloud, BD — você domina na prática. Agora aprende como a FCC pergunta.',weeks:[
{id:'w5',l:'Semana 5',d:'10–16/out',t:'ISO 27001 + ISO 27005 + LGPD completo',tip:'ISO 27001 é gestão de segurança. FCC cobra os controles e a estrutura do SGSI. Entenda a lógica de cada domínio.',tasks:[
{id:'t029',t:'ISO/IEC 27005:2023 — Gestão de Riscos I ao IV (Gran — TI)',d:'Segurança da Informação',b:['t']},
{id:'t030',t:'ISO/IEC 27001:2022 — Sistema de Gestão I ao IV (Gran — TI)',d:'Segurança da Informação',b:['t'],p:true},
{id:'t031',t:'LGPD completa — Partes V ao X (Gran — TI)',d:'Legislação Aplicada à TI',b:['t']},
{id:'t032',t:'30 questões FCC — Segurança + LGPD',d:'QConcursos → Segurança → FCC',b:['q']},
]},
{id:'w6',l:'Semana 6',d:'17–23/out',t:'ISO 27001 completo + ITIL Práticas finais',tip:'',tasks:[
{id:'t033',t:'ISO/IEC 27001:2022 — Módulos V ao XII (Gran — TI)',d:'Segurança',b:['t']},
{id:'t034',t:'ITIL 4 — Práticas IV, V, VI, VII e VIII (Gran — TI)',d:'Governança TI',b:['t']},
{id:'t035',t:'SQL completo — JOIN, GROUP BY, normalização (Gran — TI)',d:'Banco de Dados',b:['t'],p:true},
{id:'t036',t:'30 questões FCC — SQL e Banco de Dados',d:'QConcursos → Banco de Dados → FCC',b:['q']},
]},
{id:'w7',l:'Semana 7',d:'24–30/out',t:'Cloud AWS + DevSecOps + Docker + Kubernetes',tip:'',tasks:[
{id:'t037',t:'Cloud — AWS I e II + Azure + Google Cloud (Gran — TI)',d:'Redes e Cloud',b:['t']},
{id:'t038',t:'CI/CD + Contêineres + Docker I, II, III (Gran — TI)',d:'DevOps',b:['t']},
{id:'t039',t:'Kubernetes I ao V (Gran — TI)',d:'DevOps',b:['t']},
{id:'t040',t:'Simulado TI — 45 questões cronometrado',d:'QConcursos → TI → FCC',b:['s']},
]},
{id:'w8',l:'Semana 8',d:'31/out–06/nov',t:'COBIT cascata + Oracle + PostgreSQL + Simulado',tip:'',tasks:[
{id:'t041',t:'COBIT 2019 — Cascata de metas + 40 objetivos (Gran — TI)',d:'Governança TI',b:['t'],p:true},
{id:'t042',t:'Oracle — módulos I ao X (Gran — TI)',d:'Banco de Dados',b:['t']},
{id:'t043',t:'PostgreSQL completo (Gran — TI)',d:'Banco de Dados',b:['t']},
{id:'t044',t:'Simulado completo 70 questões + estudo de caso',d:'4h30 ininterruptas',b:['s'],p:true},
]},
]},
{id:'nov',n:'NOVEMBRO — TI Parte 2: os gaps',c:'#a855f7',desc:'COBIT, Eng. de Software avançado, IA generativa — aqui você parte do zero em alguns temas.',weeks:[
{id:'w9',l:'Semana 9',d:'07–13/nov',t:'ISO 27002 + IA Generativa + LLMs',tip:'Você já usa IA no dia a dia — formalize: LLM, token, temperatura, RAG, embedding.',tasks:[
{id:'t045',t:'ISO/IEC 27002:2022 — Controles I ao X (Gran — TI)',d:'Segurança',b:['t']},
{id:'t046',t:'Redes Neurais + Deep Learning (Gran — TI)',d:'IA e Ciência de Dados',b:['t']},
{id:'t047',t:'LLMs + RAG + Engenharia de Prompts (Gran — TI)',d:'IA e Ciência de Dados',b:['t'],p:true},
]},
{id:'w10',l:'Semana 10',d:'14–20/nov',t:'UML + CMMI + Testes de Software',tip:'',tasks:[
{id:'t048',t:'UML — todos os diagramas (Gran — TI)',d:'Engenharia de Software',b:['t']},
{id:'t049',t:'CMMI v2.0 + MPS.BR 2024 (Gran — TI)',d:'Engenharia de Software',b:['t']},
{id:'t050',t:'Testes — todos os estágios I ao X (Gran — TI)',d:'Engenharia de Software',b:['t']},
{id:'t051',t:'30 questões FCC — Engenharia de Software',d:'QConcursos → Eng. de Software → FCC',b:['q']},
]},
{id:'w11',l:'Semana 11',d:'21–27/nov',t:'POO + APIs REST + Padrões GOF',tip:'',tasks:[
{id:'t052',t:'POO — Classes, Herança, Polimorfismo (Gran — TI)',d:'Desenvolvimento de Sistemas',b:['t']},
{id:'t053',t:'APIs REST, GraphQL, WebSocket (Gran — TI)',d:'Desenvolvimento de Sistemas',b:['t'],p:true},
{id:'t054',t:'Padrões GOF — Criacional, Estrutural, Comportamental (Gran — TI)',d:'Desenvolvimento de Sistemas',b:['t']},
]},
{id:'w12',l:'Semana 12',d:'28/nov–04/dez',t:'Zero Trust + Microsserviços + Discursiva',tip:'',tasks:[
{id:'t055',t:'Arquitetura: Microsserviços, Zero Trust (Gran — TI)',d:'DevOps',b:['t'],p:true},
{id:'t056',t:'Treino estudo de caso 1: incidente de segurança',d:'Escreva 30 linhas sem consulta',b:['d'],p:true},
{id:'t057',t:'Simulado completo 70 questões',d:'4h30 ininterruptas',b:['s']},
]},
]},
{id:'dez',n:'DEZEMBRO — Revisão total + Discursiva',c:'#00e5a0',desc:'Pare de aprender coisas novas. Consolide, simule e treine a discursiva.',weeks:[
{id:'w13',l:'Semana 13',d:'05–18/dez',t:'Simulados Finais I–X + Revisão Legislação',tip:'',tasks:[
{id:'t058',t:'Simulados Finais Gran I ao X',d:'4h30 cada',b:['s'],p:true},
{id:'t059',t:'Revisão Lei Orgânica + Regimento — releia resumos',d:'Legislação esquece rápido',b:['r'],p:true},
{id:'t060',t:'Treino estudo de caso 2: implantação de cloud híbrida',d:'50 minutos cronometrado',b:['d']},
]},
{id:'w14',l:'Semana 14',d:'19/dez–01/jan',t:'Simulados XI–XX + Discursiva 2x/semana',tip:'',tasks:[
{id:'t061',t:'Simulados Finais Gran XI ao XX',d:'4h30 cada',b:['s']},
{id:'t062',t:'Treino estudo de caso 3: governança TI TCE-GO',d:'2x por semana',b:['d']},
{id:'t063',t:'Revisão COBIT + ITIL — questões dos erros',d:'Foco nos erros dos simulados',b:['r']},
]},
]},
{id:'jan',n:'JANEIRO — Reta final',c:'#3d7eff',desc:'Zero conteúdo novo. Simulados, revisão e descanso.',weeks:[
{id:'w15',l:'Semana 15',d:'02–08/jan',t:'Simulados XXI–XXVIII + Revisão final',tip:'Seu inimigo agora é a ansiedade. Simulados treinam o emocional tanto quanto o conteúdo.',tasks:[
{id:'t064',t:'Simulados Finais Gran XXI ao XXVIII',d:'4h30 cada',b:['s'],p:true},
{id:'t065',t:'Revisão final: Lei Orgânica + Regimento + CF/88',d:'Releia só o que ainda erra',b:['r'],p:true},
{id:'t066',t:'Último treino de estudo de caso — 50 minutos',d:'Simule o tempo real',b:['d']},
]},
{id:'w16',l:'Semana 16',d:'09–17/jan',t:'Última semana + PROVA',tip:'Véspera: não estude. Só resumos de 1 página. Durma cedo.',tasks:[
{id:'t067',t:'11–13/jan: Revisão leve — só resumos de 1 página',d:'Sem questões novas',b:['r']},
{id:'t068',t:'14/jan: 25 questões gerais — manutenção',d:'Não analise erros profundamente',b:['s']},
{id:'t069',t:'15/jan: Revisão legislação — competências TCE-GO',d:'Itens mais cobrados',b:['r'],p:true},
{id:'t070',t:'16/jan — VÉSPERA: NÃO ESTUDE. Descanse.',d:'Organize documentos, confira local, durma cedo',b:['r']},
{id:'t071',t:'17/jan — PROVA TCE-GO TI 🎯',d:'30 min antes. RG + caneta preta + água. Você se preparou.',b:['s'],p:true},
]},
]},
];

const BLOCKS=[
{id:'leg',n:'Legislação TCE-GO',c:'#e84545',topics:[
{id:'tp001',n:'Lei Orgânica TCE-GO — natureza, competência',w:'h',f:'★☆☆☆☆'},
{id:'tp002',n:'Lei Orgânica TCE-GO — organização, atribuições',w:'h',f:'★☆☆☆☆'},
{id:'tp003',n:'Lei Orgânica TCE-GO — processo e fiscalização',w:'h',f:'★☆☆☆☆'},
{id:'tp004',n:'Regimento Interno TCE-GO — organização e sessões',w:'h',f:'★☆☆☆☆'},
{id:'tp005',n:'Regimento Interno TCE-GO — processos e recursos',w:'h',f:'★☆☆☆☆'},
{id:'tp006',n:'Código de Ética dos Servidores TCE-GO',w:'m',f:'★☆☆☆☆'},
{id:'tp007',n:'Regime jurídico dos servidores públicos de GO',w:'m',f:'★★☆☆☆'},
{id:'tp008',n:'⚠️ CF/88 — Adm. Pública + controle externo (arts. 37, 70-75)',w:'h',f:'★☆☆☆☆'},
{id:'tp009',n:'⚠️ Constituição do Estado de GO — disposições TCE-GO',w:'h',f:'★☆☆☆☆'},
{id:'tp010',n:'⚠️ Políticas Institucionais TCE-GO + Resolução 15/2024',w:'h',f:'★☆☆☆☆'},
]},
{id:'por',n:'Língua Portuguesa',c:'#f0a500',topics:[
{id:'tp011',n:'Interpretação e compreensão de texto',w:'h',f:'★★★☆☆'},
{id:'tp012',n:'Coesão e coerência textual',w:'m',f:'★★★☆☆'},
{id:'tp013',n:'Concordância verbal e nominal',w:'h',f:'★★★☆☆'},
{id:'tp014',n:'Regência verbal e nominal + Crase',w:'h',f:'★★★☆☆'},
{id:'tp015',n:'⚠️ Redação Oficial — ofício, memorando',w:'h',f:'★★☆☆☆'},
{id:'tp016',n:'Morfologia: classes gramaticais',w:'m',f:'★★☆☆☆'},
]},
{id:'log',n:'Raciocínio Lógico e Matemática',c:'#f59e0b',topics:[
{id:'tp017',n:'Proposições, conectivos e tabela-verdade',w:'h',f:'★★☆☆☆'},
{id:'tp018',n:'Quantificadores, silogismos',w:'h',f:'★★☆☆☆'},
{id:'tp019',n:'Porcentagem, razão e proporção',w:'m',f:'★★★☆☆'},
{id:'tp020',n:'Juros simples e compostos, frações',w:'l',f:'★★★☆☆'},
]},
{id:'red',n:'Redes de Computadores',c:'#22d3a5',topics:[
{id:'tp021',n:'Modelo OSI: 7 camadas, funções, protocolos',w:'h',f:'★★★★★'},
{id:'tp022',n:'TCP/IP: handshake, flags, portas',w:'h',f:'★★★★★'},
{id:'tp023',n:'Protocolos: DNS, DHCP, HTTP/S, FTP, SMTP, SNMP',w:'h',f:'★★★★★'},
{id:'tp024',n:'VLANs, trunking, STP, switching',w:'m',f:'★★★★★'},
{id:'tp025',n:'Firewalls, IDS/IPS, NAT, ACLs, VPN',w:'h',f:'★★★★☆'},
]},
{id:'seg',n:'Segurança da Informação',c:'#fb923c',topics:[
{id:'tp026',n:'CID + autenticidade e não-repúdio',w:'h',f:'★★★★☆'},
{id:'tp027',n:'Criptografia: simétrica, assimétrica, hashing',w:'h',f:'★★★★☆'},
{id:'tp028',n:'IAM, MFA, OAuth 2.0, SAML, JWT',w:'h',f:'★★★★☆'},
{id:'tp029',n:'Zero Trust Architecture',w:'h',f:'★★★☆☆'},
{id:'tp030',n:'ISO/IEC 27001 e 27002',w:'m',f:'★★★☆☆'},
{id:'tp031',n:'LGPD — bases legais, direitos, ANPD',w:'h',f:'★★★☆☆'},
]},
{id:'cld',n:'Computação em Nuvem',c:'#a78bfa',topics:[
{id:'tp032',n:'IaaS, PaaS, SaaS',w:'h',f:'★★★☆☆'},
{id:'tp033',n:'Pública, privada, híbrida, multicloud',w:'h',f:'★★★☆☆'},
{id:'tp034',n:'Docker: imagem, container, Dockerfile',w:'m',f:'★★★☆☆'},
{id:'tp035',n:'Kubernetes: pods, deployments, services',w:'m',f:'★★☆☆☆'},
{id:'tp036',n:'Elasticidade, escalabilidade, HA, SLA',w:'m',f:'★★★☆☆'},
]},
{id:'bd',n:'Banco de Dados',c:'#38bdf8',topics:[
{id:'tp037',n:'Modelo relacional: entidades, chaves, cardinalidade',w:'h',f:'★★★☆☆'},
{id:'tp038',n:'SQL: SELECT, JOIN, WHERE, subconsultas',w:'h',f:'★★★☆☆'},
{id:'tp039',n:'SQL: GROUP BY, HAVING, agregação',w:'h',f:'★★★☆☆'},
{id:'tp040',n:'Normalização: 1FN, 2FN, 3FN',w:'m',f:'★★☆☆☆'},
{id:'tp041',n:'NoSQL: tipos e casos de uso',w:'l',f:'★★★☆☆'},
]},
{id:'gov',n:'Governança de TI',c:'#34d399',topics:[
{id:'tp042',n:'ITIL v4: SVS, cadeia de valor, 4 dimensões',w:'h',f:'★★★★☆'},
{id:'tp043',n:'ITIL v4: 7 princípios orientadores',w:'h',f:'★★★★☆'},
{id:'tp044',n:'ITIL v4: práticas mais cobradas',w:'h',f:'★★★★☆'},
{id:'tp045',n:'COBIT 2019: 6 princípios',w:'h',f:'★★☆☆☆'},
{id:'tp046',n:'COBIT 2019: 40 objetivos — EDM, APO, BAI, DSS, MEA',w:'h',f:'★★☆☆☆'},
{id:'tp047',n:'COBIT 2019: cascata de metas',w:'m',f:'★★☆☆☆'},
]},
{id:'ia',n:'IA e Ciência de Dados',c:'#f472b6',topics:[
{id:'tp048',n:'LLMs, IA generativa, Transformer',w:'h',f:'★★★★☆'},
{id:'tp049',n:'RAG: embeddings, vector database',w:'h',f:'★★★★☆'},
{id:'tp050',n:'Engenharia de prompts',w:'h',f:'★★★★☆'},
{id:'tp051',n:'Machine Learning: supervisionado, não supervisionado',w:'m',f:'★★★☆☆'},
]},
{id:'dev',n:'Engenharia de Software e DevSecOps',c:'#60a5fa',topics:[
{id:'tp052',n:'Scrum: papéis, eventos, artefatos',w:'h',f:'★★★☆☆'},
{id:'tp053',n:'Kanban: princípios, WIP, fluxo',w:'m',f:'★★★☆☆'},
{id:'tp054',n:'UML: casos de uso, classe, sequência',w:'m',f:'★★☆☆☆'},
{id:'tp055',n:'Testes: tipos, TDD, BDD',w:'m',f:'★★☆☆☆'},
{id:'tp056',n:'DevSecOps: CI/CD, segurança integrada',w:'h',f:'★★★☆☆'},
{id:'tp057',n:'APIs REST: verbos, status codes, autenticação',w:'h',f:'★★★★☆'},
{id:'tp058',n:'SOLID e padrões de projeto GOF',w:'m',f:'★★☆☆☆'},
{id:'tp059',n:'Microsserviços, Zero Trust, Clean Architecture',w:'m',f:'★★★☆☆'},
]},
];

const GRAN=[
{mes:'SETEMBRO/2026',dias:[
{id:'g0902',dt:'02/09 Qua',t:'Início — Interpretação + Proposições + DevOps',a:[['Interpretação de Textos — Apresentação','Língua Portuguesa','g'],['Semântica — Significação Literal e Contextual','Língua Portuguesa','g'],['Proposições Lógicas I e II','Matemática','g'],['Eng. de Software — Conceitos Gerais I e II','Eng. de Software','t'],['DevOps — Conceitos e Fundamentos','DevOps','t']]},
{id:'g0903',dt:'03/09 Qui',t:'IA + NoSQL + Segurança',a:[['Ciência de Dados','IA e Ciência de Dados','t'],['NoSQL — Conceitos e Redis','Banco de Dados','t'],['Segurança da Informação: Conceitos I e II','Segurança','t']]},
{id:'g0907',dt:'07/09 Seg',t:'Gramática + Conectivos + Legislação',a:[['Gramática + Classes de Palavras I','Português','g'],['Conectivos: Conjunção + Disjunção','Matemática','g'],['Legislação Institucional — Apresentação','Legislação','g']]},
{id:'g0908',dt:'08/09 Ter',t:'Redes OSI + CF/88',a:[['Modelos OSI e TCP/IP — Introdução','Redes','t'],['Classes de Palavras II','Português','g'],['CF/88 — Da Adm. Pública I','Legislação','g']]},
{id:'g0909',dt:'09/09 Qua',t:'OSI Camadas + Lógica',a:[['OSI — Física + Enlace','Redes','t'],['CF/88 — Adm. Pública II e III','Legislação','g'],['Condicional','Matemática','g']]},
{id:'g0910',dt:'10/09 Qui',t:'Redes + Eng. Software',a:[['OSI — Rede e Transporte','Redes','t'],['Requisitos I e II','Eng. de Software','t'],['CF/88 — Adm. Pública III','Legislação','g']]},
{id:'g0911',dt:'11/09 Sex',t:'Redes + LGPD + Concordância',a:[['OSI — Sessão, Apresentação, Aplicação','Redes','t'],['LGPD — Partes I e II','Legislação TI','t'],['Concordância Verbal I','Português','g']]},
{id:'g0914',dt:'14/09 Seg',t:'Concordância + Coesão + Lógica',a:[['Concordância II e III','Português','g'],['Coesão x Coerência','Português','g'],['Bicondicional','Lógica','g']]},
{id:'g0915',dt:'15/09 Ter',t:'Regência + Crase + Matemática',a:[['Regência Verbal I e II','Português','g'],['Crase I e II','Português','g'],['Porcentagem I, II e III','Matemática','g']]},
{id:'g0916',dt:'16/09 Qua',t:'⚠️ Redação Oficial + Legislação',a:[['Definição e Atributos da Redação Oficial','Português','g'],['Padrão Ofício + Estrutura I e II','Português','g'],['Memorando','Português','g'],['Código de Ética TCE-GO I','Legislação','g']]},
{id:'g0917',dt:'17/09 Qui',t:'COBIT 2019 + Código de Ética',a:[['COBIT 2019 — Conceitos Gerais','Governança TI','t'],['Código de Ética TCE-GO II','Legislação','g'],['Segurança em APIs I e II','Segurança','t']]},
{id:'g0918',dt:'18/09 Sex',t:'COBIT Domínios + LGPD',a:[['COBIT 2019 — Domínios I, II e III','Governança TI','t'],['LGPD — Partes III e IV','Legislação TI','t']]},
{id:'g0921',dt:'21/09 Seg',t:'ITIL Práticas + Banco de Dados',a:[['ITIL 4 — Cadeia de Valor + Práticas I e II','Governança TI','t'],['Banco de Dados — Conceitos Iniciais','BD','t'],['Coesão Referencial','Português','g']]},
{id:'g0922',dt:'22/09 Ter',t:'Lei Orgânica TCE-GO + ITIL',a:[['Lei Orgânica TCE-GO I e II (Lei 16.168/2007)','Legislação','g'],['ITIL 4 — Práticas III e IV','Governança TI','t'],['Razão e Proporção I','Matemática','g']]},
{id:'g0923',dt:'23/09 Qua',t:'Banco de Dados + Lei Orgânica',a:[['BD — Tipos de Usuários e Linguagem','Banco de Dados','t'],['Lei Orgânica TCE-GO III e IV','Legislação','g'],['Pontuação I','Português','g']]},
{id:'g0924',dt:'24/09 Qui',t:'BD MER + Regimento Interno',a:[['Banco de Dados — MER I e II','Banco de Dados','t'],['Regimento Interno TCE-GO I e II (Res. 22/2008)','Legislação','g'],['LGPD — Partes V e VI','Legislação TI','t']]},
{id:'g0925',dt:'25/09 Sex',t:'Cloud Computing + Matemática',a:[['Cloud — Introdução + Características + Modelos','Redes e Cloud','t'],['Frações I e II','Matemática','g']]},
{id:'g0928',dt:'28–30/09',t:'COBIT Princípios + SQL + Revisão',a:[['COBIT 2019 — Princípios I e II','Governança TI','t'],['SQL — Linguagem SQL I, II e III','Banco de Dados','t'],['Revisão setembro — resumos de 1 página','Geral','g']]},
]},
{mes:'OUTUBRO/2026',dias:[
{id:'gout1',dt:'01–07/10',t:'ISO 27005 + ISO 27001 + LGPD',a:[['ISO/IEC 27005:2023 — Módulos I ao VII','Segurança','t'],['ISO/IEC 27001:2022 — SGSI I ao IV','Segurança','t'],['LGPD — módulos VII ao XIV','Legislação TI','t']]},
{id:'gout2',dt:'08–14/10',t:'ISO 27001 completo + ITIL + SQL',a:[['ISO/IEC 27001:2022 — Módulos V ao XII','Segurança','t'],['ITIL 4 — Práticas IV ao VIII','Governança TI','t'],['SQL completo — JOIN, GROUP BY, normalização','Banco de Dados','t']]},
{id:'gout3',dt:'15–21/10',t:'Cloud AWS + DevSecOps + Docker',a:[['Cloud — AWS I e II + Azure + Google Cloud','Redes e Cloud','t'],['CI/CD + Docker I, II, III','DevOps','t'],['Kubernetes I ao V','DevOps','t']]},
{id:'gout4',dt:'22–31/10',t:'COBIT completo + Oracle + PostgreSQL',a:[['COBIT 2019 — Cascata de metas + 40 objetivos','Governança TI','t'],['Oracle — módulos I ao X','Banco de Dados','t'],['PostgreSQL completo','Banco de Dados','t']]},
]},
{mes:'NOVEMBRO/2026',dias:[
{id:'gnov1',dt:'01–07/11',t:'ISO 27002 + IA Generativa + LLMs',a:[['ISO/IEC 27002:2022 — Controles I ao X','Segurança','t'],['Redes Neurais + Deep Learning','IA','t'],['LLMs + RAG + Engenharia de Prompts','IA','t']]},
{id:'gnov2',dt:'08–14/11',t:'UML + CMMI + Testes',a:[['UML — todos os diagramas','Eng. de Software','t'],['CMMI v2.0 + MPS.BR 2024','Eng. de Software','t'],['Testes — todos os estágios','Eng. de Software','t']]},
{id:'gnov3',dt:'15–21/11',t:'POO + APIs REST + Padrões GOF',a:[['POO — Classes, Herança, Polimorfismo','Desenv. Sistemas','t'],['APIs REST + GraphQL + WebSocket','Desenv. Sistemas','t'],['Padrões GOF','Desenv. Sistemas','t']]},
{id:'gnov4',dt:'22–30/11',t:'Zero Trust + Microsserviços + Discursiva',a:[['Arquitetura: Microsserviços, Zero Trust','DevOps','t'],['Prova Discursiva — Estudo de Caso I e II','Discursiva','t']]},
]},
{mes:'DEZEMBRO/2026 e JANEIRO/2027',dias:[
{id:'gdez',dt:'Dez/Jan',t:'Simulados Finais + Discursiva + Revisão total',a:[['Simulados Finais Gran I ao XXVIII','Simulados','t'],['Estudo de Caso — treino 2x/semana','Discursiva','t'],['Revisão final — legislação + COBIT + ITIL','Geral','g']]},
]},
];

// UTILITÁRIOS
function todayKey(){const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');}
function countdown(){return Math.max(0,Math.ceil((ED-new Date())/86400000));}
function el(id){return document.getElementById(id);}
function set(id,html){const e=el(id);if(e)e.innerHTML=html;}

// HEADER
function updateHeader(){
  const dt=Object.values(ST.tasks).filter(Boolean).length;
  const tt=PLANO.flatMap(f=>f.weeks.flatMap(w=>w.tasks)).length;
  const p=tt?Math.round(dt/tt*100):0;
  const d=el('daysLeft'),b=el('overallBar'),pc=el('overallPct');
  if(d)d.textContent=countdown();
  if(b)b.style.width=p+'%';
  if(pc)pc.textContent=p+'%';
}

// PAINEL
function renderPainel(){
  const dt=Object.values(ST.tasks).filter(Boolean).length;
  const tt=PLANO.flatMap(f=>f.weeks.flatMap(w=>w.tasks)).length;
  const p=tt?Math.round(dt/tt*100):0;
  const days=countdown();
  const msgs=[
    {mx:5,txt:`<strong>Hoje é o primeiro dia. 12 de setembro de 2026 — 127 dias para a prova.</strong> Você tem ${days} dias até a prova e está partindo do zero — isso é mais vantagem do que desvantagem. Quem começa do zero não tem vícios. Comece pelo plano da <strong>Semana 1</strong>: baixe a Lei Orgânica do TCE-GO e crie sua conta no QConcursos.`},
    {mx:30,txt:`<strong>Bom começo.</strong> ${dt} tarefas concluídas. A legislação é onde a maioria desiste. Você não pode ser essa maioria. É previsível — quem estuda com disciplina acerta quase tudo.`},
    {mx:60,txt:`<strong>Ritmo consistente.</strong> ${p}% do plano. Não abandone o português enquanto mergulha em TI. As 25 questões gerais valem tanto quanto as 45 de TI.`},
    {mx:90,txt:`<strong>Fase final.</strong> Com ${days} dias restantes, priorize simulados completos em 4h30 e treino de estudo de caso. A discursiva elimina quem não treinou escrever.`},
    {mx:100,txt:`<strong>Reta final.</strong> Confie no trabalho. Não aprenda coisas novas. Revise os resumos de 1 página, durma bem e chegue descansado no dia 17.`},
  ];
  set('mentorMsg',(msgs.find(m=>p<=m.mx)||msgs[msgs.length-1]).txt);
  const h=ST.sessions.reduce((a,s)=>a+(s.hours||0),0);
  ['sTarefas|'+dt,'sQuestoes|'+ST.quiz,'sHoras|'+h.toFixed(1)+'h','sDias|'+days].forEach(s=>{const[id,v]=s.split('|');const e=el(id);if(e)e.textContent=v;});
  // Next card
  let nxt=null,nwk=null;
  for(const f of PLANO){for(const w of f.weeks){const inc=w.tasks.filter(t=>!ST.tasks[t.id]);if(inc.length){nxt=inc[0];nwk=w;break;}}if(nxt)break;}
  const nc=el('nextCard');
  if(nc)nc.innerHTML=nxt?`<div class="ncard"><div class="ntag">📍 PRÓXIMO PASSO</div><div class="ntitle">${nwk.l}: ${nwk.t}</div><div class="ndesc">Próxima tarefa: <strong>${nxt.t}</strong></div><button class="btn btn-sm" style="margin-top:10px;" onclick="showTab('plano',document.querySelectorAll('.nb')[2])">Ver plano completo →</button></div>`:'';
  // Fase progress
  const fp=el('faseProgress');
  if(fp)fp.innerHTML=PLANO.map(f=>{const all=f.weeks.flatMap(w=>w.tasks),dn=all.filter(t=>ST.tasks[t.id]).length,pct=Math.round(dn/all.length*100);return`<div style="display:flex;align-items:center;gap:10px;margin-bottom:9px;"><div style="width:10px;height:10px;border-radius:50%;background:${f.c};flex-shrink:0;"></div><div style="flex:1;font-size:12px;color:var(--muted);">${f.n.split('—')[0].trim()}</div><div style="flex:2;background:var(--border);border-radius:99px;height:5px;overflow:hidden;"><div style="width:${pct}%;height:100%;background:${f.c};border-radius:99px;transition:width .3s;"></div></div><div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);min-width:38px;text-align:right;">${dn}/${all.length}</div></div>`;}).join('');
  // Fit
  const fit=[['Redes / infraestrutura','★★★★★','domínio total'],['Segurança da informação','★★★★☆','vivência prática'],['ITIL v4','★★★★☆','certificado — aprender como FCC cobra'],['IA generativa / RAG','★★★★☆','usa no OPUS'],['Cloud / AWS','★★★☆☆','em andamento'],['DevSecOps / Docker','★★★☆☆','usa no OPUS'],['Banco de dados / SQL','★★★☆☆','formalizar SQL'],['COBIT 2019','★★☆☆☆','gap — novembro'],['Português / Lógica','★★★☆☆','requer prática FCC'],['Legislação TCE-GO','★☆☆☆☆','gap crítico — prioridade máxima']];
  const fp2=el('fitPanel');
  if(fp2)fp2.innerHTML=fit.map(r=>`<div style="display:flex;align-items:center;gap:8px;padding:8px 0;border-bottom:1px solid var(--border);"><div style="flex:1;font-size:13px;">${r[0]}</div><div style="font-size:12px;letter-spacing:1px;">${r[1]}</div><div style="font-size:11px;color:var(--muted);text-align:right;">${r[2]}</div></div>`).join('');
}

// CRONOGRAMA
function showCrono(id,btn){
  document.querySelectorAll('.cview').forEach(v=>v.classList.remove('active'));
  document.querySelectorAll('.cbtn').forEach(b=>b.classList.remove('active'));
  const e=el('cv-'+id);if(e)e.classList.add('active');
  if(btn)btn.classList.add('active');
  if(id==='hoje')renderHoje();
  if(id==='semana')renderSemana();
  if(id==='mes')renderMes();
}

function renderHoje(){
  const hc=el('hojeContainer');if(!hc)return;
  const key=todayKey();
  const t=new Date();
  const dn=['Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado'];
  const mn=['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'];
  const ds=`${dn[t.getDay()]}, ${t.getDate()} de ${mn[t.getMonth()]} de ${t.getFullYear()}`;
  const dia=PH[key];
  if(!dia){hc.innerHTML=`<div class="hhero"><div class="hdata">${ds}</div><div class="htitle">📅 Dia sem aula programada</div><div class="htema">Aproveite para revisar resumos ou fazer questões extras.</div></div>`;return;}
  let h=`<div class="hhero"><div class="hdata">${ds}</div><div class="htitle">${dia.t}</div><div class="htema">Tema: <strong>${dia.te}</strong></div></div>`;
  h+=`<div class="mcard"><div class="mhd"><div class="mic">🏃</div><div class="minf"><div class="mtit">Cardio — Podcast do dia</div><div class="msub">${dia.c.p}</div></div><div class="mtime">35–40 min</div></div><div class="mbody"><a href="${dia.c.u}" target="_blank" class="btn btn-s btn-sm">▶ Abrir no Spotify</a></div></div>`;
  h+=`<div class="mcard"><div class="mhd"><div class="mic">🍽️</div><div class="minf"><div class="mtit">Almoço — Questões FCC</div><div class="msub">${dia.a.m}</div></div><div class="mtime">30 min</div></div><div class="mbody"><a href="${dia.a.u}" target="_blank" class="btn btn-b btn-sm">▶ Abrir QConcursos</a></div></div>`;
  const nh=dia.n.map(a=>`<div class="arow"><div class="ainf"><div class="atit">${a.t}</div><div class="adisc">${a.d}</div></div><a href="${a.tp==='t'?GTI:GGE}" target="_blank" class="lp ${a.tp==='t'?'lp-ti':'lp-g'}">${a.tp==='t'?'📚 Gran TI':'📖 Gran Gerais'}</a></div>`).join('');
  h+=`<div class="mcard"><div class="mhd"><div class="mic">🌙</div><div class="minf"><div class="mtit">Noite — Aulas Gran + Questões</div><div class="msub">${dia.n.length} aulas previstas</div></div><div class="mtime">2h–2h30</div></div><div class="mbody">${nh}</div></div>`;
  hc.innerHTML=h;
}

function renderSemana(){
  const sc=el('semanaContainer');if(!sc)return;
  const hoje=new Date().getDay();
  let h=`<div class="mentor" style="margin-bottom:12px;"><div class="mmsg"><strong>Sua semana de estudos.</strong> O dia de hoje está marcado em azul. Clique em qualquer dia para ver os links diretos.</div></div>`;
  SEMANA.forEach((dia,idx)=>{
    const isT=idx===((hoje===0?6:hoje-1));
    const ah=dia.ns.map(a=>`<div class="sdrow"><div class="sdicon">🌙</div><div class="sdinf"><div class="sdtitle">${a.t}</div><div class="sdlinks"><a href="${a.tp==='t'?GTI:GGE}" target="_blank" class="lp ${a.tp==='t'?'lp-ti':'lp-g'}">${a.tp==='t'?'📚 Gran TI':'📖 Gran Gerais'}</a></div></div></div>`).join('');
    h+=`<div class="sdia ${isT?'today':''}"><div class="sdhdr ${isT?'open':''}" id="sdh_${dia.id}" onclick="toggleSem('${dia.id}')"><div class="sdnome">${dia.n}</div><div class="sdtit">${dia.t}</div>${isT?'<div class="sdhoje">HOJE</div>':''}<div class="sdchev">›</div></div><div class="sdbody ${isT?'open':''}" id="sdb_${dia.id}"><div class="sdrow"><div class="sdicon">🏃</div><div class="sdinf"><div class="sdtitle">${dia.c.p}</div><div class="sdlinks"><a href="${dia.c.u}" target="_blank" class="lp lp-s">▶ Spotify</a></div></div></div><div class="sdrow"><div class="sdicon">🍽️</div><div class="sdinf"><div class="sdtitle">${dia.a.m}</div><div class="sdlinks"><a href="${dia.a.u}" target="_blank" class="lp lp-q">▶ QConcursos</a></div></div></div>${ah}</div></div>`;
  });
  sc.innerHTML=h;
}

function toggleSem(id){const h=el('sdh_'+id),b=el('sdb_'+id);if(h&&b){h.classList.toggle('open');b.classList.toggle('open');}}

function renderMes(){
  const mc=el('mesContainer');if(!mc)return;
  mc.innerHTML=MESES.map(m=>`<div class="mbloco" style="border-left-color:${m.c};"><div class="mmlabel" style="color:${m.c};">${m.m}</div>${m.s.map(s=>`<div class="msem"><div class="mslabel">${s.l}</div><div class="mstemas">${s.t}</div><div class="msmeta">🎯 Meta: ${s.mt}</div><div class="mslinks"><a href="${s.lk}" target="_blank" class="lp lp-ti">📚 Gran TI</a><a href="${QC}" target="_blank" class="lp lp-q">✏️ QConcursos</a></div></div>`).join('')}</div>`).join('');
}

// PLANO
function renderPlano(){
  const pc=el('planContainer');if(!pc)return;
  const bmap={t:'bt',q:'bq',r:'br',s:'bs',d:'bd'};
  const blab={t:'📖 Teoria',q:'✏️ Questões',r:'🔄 Revisão',s:'🎯 Simulado',d:'📝 Discursiva'};
  pc.innerHTML=PLANO.map(f=>{
    const all=f.weeks.flatMap(w=>w.tasks),dn=all.filter(t=>ST.tasks[t.id]).length,pct=Math.round(dn/all.length*100);
    const wh=f.weeks.map(w=>{
      const wdn=w.tasks.filter(t=>ST.tasks[t.id]).length;
      const th=w.tasks.map(t=>`<div class="titem ${ST.tasks[t.id]?'done':''}" onclick="toggleTask('${t.id}')"><div class="tchk">${ST.tasks[t.id]?'✓':''}</div><div class="tcont"><div class="ttit">${t.t}${t.p?'<span class="b bp" style="margin-left:6px;">PRIORITÁRIO</span>':''}</div><div class="tdet">${t.d}</div><div class="tbadges">${t.b.map(b=>`<span class="b ${bmap[b]||'bt'}">${blab[b]||b}</span>`).join('')}</div></div></div>`).join('');
      return`<div class="wblock"><div class="whdr" id="wh_${w.id}" onclick="toggleWeek('${w.id}')"><span class="wlbl">${w.l}</span><span class="wtit">${w.t} <span style="font-size:11px;color:var(--dim);">${w.d}</span></span><span class="wprog">${wdn}/${w.tasks.length}</span><span class="wchev">›</span></div><div class="wbody" id="wb_${w.id}">${w.tip?`<div class="tip">💡 <strong>Mentor:</strong> ${w.tip}</div>`:''}${th}</div></div>`;
    }).join('');
    return`<div class="card" style="padding:0;overflow:hidden;"><div class="fhdr" id="fh_${f.id}" onclick="toggleFase('${f.id}')"><div class="fdot" style="background:${f.c};"></div><div class="fnome">${f.n}</div><div style="font-size:11px;color:var(--muted);margin-right:8px;">${dn}/${all.length} · ${pct}%</div><div class="fchev">›</div></div><div class="fbody" id="fb_${f.id}"><div style="font-size:12px;color:var(--muted);padding:0 4px;margin-bottom:8px;">${f.desc}</div>${wh}</div></div>`;
  }).join('');
  for(const f of PLANO){const all=f.weeks.flatMap(w=>w.tasks),dn=all.filter(t=>ST.tasks[t.id]).length;if(dn<all.length){const fh=el('fh_'+f.id),fb=el('fb_'+f.id);if(fh&&fb){fh.classList.add('open');fb.classList.add('open');}for(const w of f.weeks){const wdn=w.tasks.filter(t=>ST.tasks[t.id]).length;if(wdn<w.tasks.length){const wh=el('wh_'+w.id),wb=el('wb_'+w.id);if(wh&&wb){wh.classList.add('open');wb.classList.add('open');}}break;}break;}}
}
function toggleFase(id){const h=el('fh_'+id),b=el('fb_'+id);if(h&&b){h.classList.toggle('open');b.classList.toggle('open');}}
function toggleWeek(id){const h=el('wh_'+id),b=el('wb_'+id);if(h&&b){h.classList.toggle('open');b.classList.toggle('open');}}
function toggleTask(id){ST.tasks[id]=!ST.tasks[id];sv();renderPlano();renderPainel();updateHeader();}

// TÓPICOS
function renderTopicos(){
  const tc=el('topicsContainer');if(!tc)return;
  tc.innerHTML=BLOCKS.map(b=>{
    const dn=b.topics.filter(t=>ST.topics[t.id]).length,pct=Math.round(dn/b.topics.length*100);
    return`<div class="tgroup"><div class="tghdr"><div class="tgdot" style="background:${b.c};"></div><div class="tgname">${b.n}</div><div class="tgbar"><div class="tgfill" style="width:${pct}%;background:${b.c};"></div></div><div class="tgcount">${dn}/${b.topics.length}</div></div>${b.topics.map(t=>`<div class="topi ${ST.topics[t.id]?'done':''}" onclick="toggleTopic('${t.id}')"><div class="topchk">${ST.topics[t.id]?'✓':''}</div><div class="topname">${t.n}</div><div class="topfit">${t.f}</div><span class="wb ${t.w==='h'?'wbh':t.w==='m'?'wbm':'wbl'}">${t.w==='h'?'ALTO':t.w==='m'?'MED':'BAIXO'}</span></div>`).join('')}</div>`;
  }).join('');
}
function toggleTopic(id){ST.topics[id]=!ST.topics[id];sv();renderTopicos();}

// GRAN
function renderGran(){
  const gc=el('granContainer');if(!gc)return;
  let total=0,done=0,h='';
  GRAN.forEach(mes=>{
    h+=`<div class="gmhdr">${mes.mes}</div>`;
    mes.dias.forEach(dia=>{
      const ddn=dia.a.filter((_,ai)=>ST.gran[`${dia.id}_${ai}`]).length;
      total+=dia.a.length;done+=ddn;
      const ah=dia.a.map((a,ai)=>{const aid=`${dia.id}_${ai}`,isDone=!!ST.gran[aid];return`<div class="gaula ${isDone?'done':''}" id="ga_${aid}"><div class="gachk" onclick="toggleGran('${aid}')">${isDone?'✓':''}</div><div class="gainf" onclick="toggleGran('${aid}')"><div class="gatit">${a[0]}</div><div class="gadisc">${a[1]}</div></div><a href="${a[2]==='t'?GTI:GGE}" target="_blank" class="galink ${a[2]==='t'?'ti':''}">${a[2]==='t'?'📚 Gran TI':'📖 Gran Gerais'}</a></div>`;}).join('');
      h+=`<div class="gday"><div class="gdhdr" id="gdh_${dia.id}" onclick="toggleGranDay('${dia.id}')"><div class="gdate">${dia.dt}</div><div class="gdtit">${dia.t}</div><div class="gdcnt">${ddn}/${dia.a.length}</div><div class="gdchev">›</div></div><div class="gdbody" id="gdb_${dia.id}">${ah}</div></div>`;
    });
  });
  gc.innerHTML=h;
  const pct=total?Math.round(done/total*100):0;
  const bar=el('granBar'),pctEl=el('granPct');
  if(bar)bar.style.width=pct+'%';if(pctEl)pctEl.textContent=pct+'%';
  let opened=false;
  GRAN.forEach(mes=>{if(opened)return;mes.dias.forEach(dia=>{if(opened)return;const ddn=dia.a.filter((_,ai)=>ST.gran[`${dia.id}_${ai}`]).length;if(ddn<dia.a.length){const h=el('gdh_'+dia.id),b=el('gdb_'+dia.id);if(h&&b){h.classList.add('open');b.classList.add('open');}opened=true;}});});
}
function toggleGranDay(id){const h=el('gdh_'+id),b=el('gdb_'+id);if(h&&b){h.classList.toggle('open');b.classList.toggle('open');}}
function toggleGran(id){ST.gran[id]=!ST.gran[id];sv();renderGran();}


// NOTAS
function saveNote(){ST.note=el('noteArea').value;sv();const e=el('noteSaved');if(e){e.style.display='block';setTimeout(()=>e.style.display='none',2000);}}
function clearNote(){const e=el('noteArea');if(e)e.value='';ST.note='';sv();}
function loadNote(){const e=el('noteArea');if(e)e.value=ST.note||'';}
function addSession(){const d=el('sessDate').value,h=parseFloat(el('sessHours').value),t=el('sessTopic').value.trim();if(!d||!h||!t)return;ST.sessions.push({date:d,hours:h,topic:t});sv();el('sessHours').value='';el('sessTopic').value='';renderSessions();}
function removeSession(i){ST.sessions.splice(i,1);sv();renderSessions();}
function renderSessions(){
  const list=el('sessionList');if(!list)return;
  if(!ST.sessions.length){list.innerHTML='<div style="font-size:12px;color:var(--dim);">Nenhuma sessão registrada.</div>';return;}
  list.innerHTML=[...ST.sessions].reverse().map((s,ri)=>{const i=ST.sessions.length-1-ri;return`<div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--border);"><div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--muted);min-width:80px;">${s.date}</div><div style="background:rgba(61,127,255,.14);color:var(--accent);font-size:11px;font-weight:700;padding:2px 8px;border-radius:4px;">${s.hours}h</div><div style="flex:1;font-size:12px;">${s.topic}</div><button onclick="removeSession(${i})" style="background:none;border:none;color:var(--dim);cursor:pointer;font-size:16px;padding:0 4px;">×</button></div>`;}).join('');
  const th=el('totalHours');if(th)th.textContent=ST.sessions.reduce((a,s)=>a+s.hours,0).toFixed(1);
}

// NAV
function showTab(id,btn){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.nb').forEach(b=>b.classList.remove('active'));
  const tab=el('tab-'+id);if(tab)tab.classList.add('active');
  if(btn)btn.classList.add('active');
  if(id==='notas'){loadNote();renderSessions();}
  if(id==='cronograma'){renderHoje();renderSemana();renderMes();}
  if(id==='plano')renderPlano();
  if(id==='topicos')renderTopicos();
  if(id==='gran')renderGran();
  if(id==='painel')renderPainel();
}

// ESTRATEGIA
function toggleEst(id){
  const h=el('emh_'+id),b=el('emb_'+id);
  if(h&&b){h.classList.toggle('open');b.classList.toggle('open');}
}
function toggleEstMes(id){
  const h=el('emsh_'+id),b=el('emsb_'+id);
  if(h&&b){h.classList.toggle('open');b.classList.toggle('open');}
}

// DISCURSIVA
function toggleDisc(id){
  const h=el('dth_'+id),b=el('dtb_'+id);
  if(h&&b){h.classList.toggle('open');b.classList.toggle('open');}
}



// CRONÔMETRO
let _ts=0, _ti=null, _tr=false;

function tmrOpenClose(){
  const p=el('tmrPanel');
  if(p) p.classList.toggle('open');
}

function tmrToggle(){
  const btn=el('tmrBtn'), fab=el('tmrFab'), sess=el('tmrSessao');
  if(_tr){
    // Pausar
    clearInterval(_ti); _tr=false;
    if(btn){btn.textContent='▶ Continuar';btn.className='tmr-btn tmr-start';}
    if(fab) fab.className='tmr-fab';
    if(sess) sess.textContent='Pausado — toque para continuar';
  } else {
    // Iniciar / Continuar
    _tr=true;
    if(btn){btn.textContent='⏸ Pausar';btn.className='tmr-btn tmr-stop';}
    if(fab) fab.className='tmr-fab running';
    if(sess) sess.textContent='Cronômetro rodando...';
    _ti=setInterval(()=>{
      _ts++;
      tmrUpdate();
    },1000);
  }
}

function tmrReset(){
  clearInterval(_ti); _tr=false; _ts=0;
  const btn=el('tmrBtn'),fab=el('tmrFab'),sess=el('tmrSessao');
  if(btn){btn.textContent='▶ Iniciar';btn.className='tmr-btn tmr-start';}
  if(fab) fab.className='tmr-fab';
  tmrUpdate();
  if(sess) sess.textContent='Toque em Iniciar para começar';
}

function tmrUpdate(){
  const h=Math.floor(_ts/3600);
  const m=Math.floor((_ts%3600)/60);
  const s=_ts%60;
  const str=String(h).padStart(2,'0')+':'+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0');
  const d=el('tmrDisplay'), ft=el('tmrFabTime');
  if(d) d.textContent=str;
  if(ft) ft.textContent=_tr?(String(h>0?h+'h ':'')+String(m).padStart(2,'0')+':'+String(s).padStart(2,'0')):'';
}

// INIT
const sd=el('sessDate');if(sd)sd.value=new Date().toISOString().split('T')[0];
try{updateHeader();}catch(e){console.error('updateHeader:',e);}
try{renderPainel();}catch(e){console.error('renderPainel:',e);}
try{renderPlano();}catch(e){console.error('renderPlano:',e);}
try{renderTopicos();}catch(e){console.error('renderTopicos:',e);}
try{renderGran();}catch(e){console.error('renderGran:',e);}
