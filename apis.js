sayo = process.cwd()


/*******FUNÇÕES NECESSÁRIAS********/
const express = require('express');
const router = express.Router();
const { exec } = require('child_process')
const fetch = require('node-fetch')
const canvacord = require('canvacord').Canvas
const fs = require('fs')
const { spawn } = require('child_process');
const path = require('path')
const util = require('util')
const webp = require('webp-converter');
const knights = require("knights-canvas");
const d = new Date
const deepai = require('deepai')
//const { xvideosofc } = require('./funções/xvideos');

//TODAS AS APIS/SCRAP
const { 
 styletext, //FONTE DAS LETRAS
 gpwhatsapp, // LINK DE GRUPOS ALEATÓRIOS
 hentaistube, //HENTAISTUBE PESQUISA
 nerding, // NERDING PESQUISA
 apkmodhacker, //APKMOD PESQUISA
 xvideos, //BLOG XVIDEOS PESQUISA
 uptodown, //UPTODOWN PESQUISA
 pornhub, //PORNHUB PESQUISA
 soundl, //SOUNDCLOUD DOWNLOAD
 st, //STICKER SEARCH
 gpsrc, //PESQUISAR GRUPOS
 dafontSearch, //FONTS PESQUISA
 dafontDown,  //FONTS DOWNLOAD
 igstalk, // INSTAGRAM STALK
 ff, // FOGO GRATIS PESQUISA
 papeldeparede, //PESQUISAR PAPEL DE PAREDE
 htdl, //HENTAISTUBE DOWNLOAD
// xvideoss, //OFF
// xvideosdl, //OFF
 assistithtdl, //ASSISTIRHENTAI DOWNLOAD
 assistitht, //ASSISTIRHENTAI PESQUISA
 pornogratis, //PORNOGRATIS PESQUISA
 wallmob, //WALLMOB PESQUISA
 ytDonlodMp3, //YTMP3 BAIXAR ÁUDIOS DO YT VIA LINK
  ytDonlodMp4, //YTMP4 BAIXAR VÍDEOS DO YT VIA LINK
  ytPlayMp3, //PLAY BAIXAR ÁUDIOS DO YT VIA NOME
  ytPlayMp4, //PLAYVÍDEO BAIXAR VÍDEOS DO YT VIA NOME
  ytSearch, //PESQUISA NO YT EM FORMA DE API
  TelegraPh //UPAR ARQUIVOS NO TELEGRA.PH
 } = require("./funções/api");
 
 /*const { 
 pasteggr
 } = require("./funções/pastegg");*/

const { 
CanvasSenpai 
} = require("./funções/card/1")
const canva = new CanvasSenpai();

const { 
 verificar_apikey, 
 adicionar_limit, 
 isLimit, 
 verificar_limit 
} = require("./db/db");

const dados = JSON.parse(fs.readFileSync('./db/pessoas.json'))

/*const { 
usuario 
} = require('./db/model');*/

const { 
apikeypremium 
} = require("./configuração");

/*******FIM DAS FUNÇÕES NECESSÁRIAS********/

const criador = ['@Breno']; // Nome do criador

resposta = { //MSG DE ERRO NO SERVIDOR
    semkey: {
        status: false,
        criador: `${criador}`,
        código: 406,
        mensagem: 
        'por favor faça login e consiga uma key aleatoria'
    },
    cdtxt: {
        status: false,
        criador: `${criador}`,
        código: 406,
        mensagem: 
        'insira o texto na url'
    },
    cdimg: {
        status: false,
        criador: `${criador}`,
        código: 406,
        mensagem: 
        'Insira a imagem na url'
    },
    error: {
       status: false,
        criador: `${criador}`,
        mensagem: 
        'ops :/ deu erro no servidor interno'
    }
}

/*******ALGUMAS FUNÇÕES********/
async function getBuffer(url) {
  he = await fetch(url).then(c => c.buffer())
   return he
}
async function getJson(url) {
  he = await fetch(url).then(c => c.json())
   return he
}
function getRandom(nans) {
  he = nans[Math.floor(Math.random() * nans.length)]
   return he
}


const fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}

/*****************************************
*                                                                 
*                                                                          
*╔══╗╔═╦╗  ╔══╗╔══╗╔═╦╗╔═╗   *
*║╔╗║╚╗║║  ║══╣║╔╗║╚╗║║║║║   *
*║╔╗║╔╩╗║  ╠══║║╠╣║╔╩╗║║║║   *
*╚══╝╚══╝  ╚══╝╚╝╚╝╚══╝╚═╝   *
*────────  ───────────────   *        
*                                                                         
******************************************/

/******************************************

NULIS

function nulis(nome) {
    let fontPath = './arquivos/Zahraaa.ttf'
    let inputPath = './arquivos/nulis.jpg'
    let outputPath = './tmp/nuliss.jpg'
    let tgl = d.toLocaleDateString('id-Id')
    let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
    return spawn('convert', [
        inputPath,
        '-font',
        fontPath,
        '-size',
        '1024x784',
        '-pointsize',
        '20',
        '-interline-spacing',
        '1',
        '-annotate',
        '+806+78',
        hari,
        '-font',
        fontPath,
        '-size',
        '1024x784',
        '-pointsize',
        '18',
        '-interline-spacing',
        '1',
        '-annotate',
        '+806+102',
        tgl,
        '-font',
        fontPath,
        '-size',
        '1024x784',
        '-pointsize',
        '20',
        '-interline-spacing',
        '-7.5',
        '-annotate',
        '+344+142',
        nome,
        outputPath
    ]);
};
**********************************/

//API REST....

/* router.get('/cpf', async (req, res) => {
    const apikey = req.query.apikey;
    const cpf = req.query.cpf;
   if (apikey === undefined || cpf === undefined) return res.status(404).send({
        status: 404,
        message: `insira o parâmetro cpf & apikey`
    });
   if(apikey !== `Aj3a5T627dkK5hB5`) return res.status(403).send({
   entre_em_contato_para_obter_a_api:`https://wa.me/5562936180708`});
    fetch(encodeURI(`http://51.255.55.134/receita.php?cpf=${cpf}`))
        .then(response => response.json())
        .then(data => {
    res.json({
    resultado: {
    criador: `Breno`,
    cpf: `${data.pessoa.id}`,
    nome: `${data.pessoa.nome}`,
    nome_mãe: `${data.nomeMae}`,
    nascimento: `${data.dataNascimento}`,
    título_eleitor: `${data.numeroTituloEleitor}`,
    sexo: `${data.sexo}`,
    cidade_natal: `${data.pessoa.nomeMunicipioNaturalidade}`,
    bairro: `${data.pessoa.nomeBairro}`,
    rua: `${data.pessoa.nomeLogradouro}`,
    município: `${data.pessoa.nomeMunicipio}`,
    cep: `${data.pessoa.numeroCep}`,
    ddd: `${data.pessoa.numeroDdd}`,
    número: `${data.pessoa.numeroTelefone}`,
    sigla: `${data.pessoa.siglaUf}`
    },
    });
    }).catch(error => {
        console.log(error);
        res.status(500).send({
            status: 500,
            mensagem: 'Erro no Servidor Interno'
        })
    });
})*/ 

router.get('/verkey', async (req, res) => {
    const apikey = req.query.apikey;
    if (apikey === undefined) return res.json(resposta.semkey)
    const veri_key = await verificar_apikey(apikey);
     if (!veri_key) return res.json({ status : false, criador : `${criador}`, mensagem : "essa apikey não está registrada"})
    const limit = await verificar_limit(apikey);
    res.send({status: 200, apikey: apikey, limit: limit});
});

/*router.get('/inforg', async (req, res) => {
let usuarios = await usuario.findOne({_id: id});
    res.json({ status : false, criador : `${criador}`, mensagem : usuario.find({})})
});*/

//router.get('/xvideos', xvideosofc);


    router.get('/card/welcome', async (req, res) => {
    const cdapikey = req.query.apikey;
    const nome = req.query.nome;    
    const nomegp = req.query.nomegp;    
    const fotogp = req.query.fotogp;    
    const perfil = req.query.perfil;            
    const membros = req.query.membros;
    const fundo = req.query.fundo;        
    if (!nome) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nome"})
    if (!nomegp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nomegp"})
    if (!membros) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô membros"})
    if (!fotogp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô fotogp"})
    if (!perfil) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô fundo"})
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
var image = await new knights.Welcome()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment();
   data = image.toBuffer();
   res.type('png')
   res.send(data)
   });
   
    router.get('/card/goodbye', async (req, res) => {
    const cdapikey = req.query.apikey;
    const nome = req.query.nome;    
    const nomegp = req.query.nomegp;    
    const fotogp = req.query.fotogp;    
    const perfil = req.query.perfil;            
    const membros = req.query.membros;
    const fundo = req.query.fundo;        
    if (!nome) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nome"})
    if (!nomegp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nomegp"})
    if (!membros) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô membros"})
    if (!fotogp) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô fotogp"})
    if (!perfil) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô fundo"})
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
var image = await new knights.Goodbye()
    .setUsername(`${nome}`)
    .setGuildName(`${nomegp}`)
    .setGuildIcon(`${fotogp}`)
    .setMemberCount(`${membros}`)
    .setAvatar(`${perfil}`)
    .setBackground(`${fundo}`)
    .toAttachment();
   data = image.toBuffer();
   res.type('png')
   res.send(data)
   });
   
   router.get('/card/menu', async (req, res) => {
    const cdapikey = req.query.apikey;
    const nome = req.query.nome;    
    const bateria = req.query.bateria;    
    const outro = req.query.outro;    
    const perfil = req.query.perfil;            
    const fundo = req.query.fundo;        
    const msg = req.query.msg;            
    if (!nome) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô nome"})
    if (!msg) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô msg"})    
    if (!bateria) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô bateria"})
    if (!outro) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô outro"})
    if (!perfil) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô perfil"})
    if (!fundo) return res.json({ status : false, criador : `${criador}`, message : "coloque o parametrô fundo"})
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
   let X = await canva.profile(
     {
      name: msg,
      discriminator: bateria,
      avatar: perfil,
      rank: nome, 
      xp: outro,
      background: fundo,
      blur: false
     })
    ç = X.toBuffer();
    res.type('png')
    res.send(ç)
    });
    
router.get('/ferramentas/antipornografia', async (req, res, next) => {
const cdapikey = req.query.apikey;
img = req.query.img;
if (cdapikey === undefined) return res.json(resposta.semkey)
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
if (!img) {
 deepai.setApiKey('6a6462b1-2f1f-4ca6-b071-8095d697c041')
const resp = await deepai.callStandardApi("nsfw-detector", { image: `${img}` })
if (resp.output.nsfw_score > 0.85) return res.json({ status : true, criador : `${criador}`, pornografia : "sim"})
if (resp.output.nsfw_score < 0.85) return res.json({ status : true, criador : `${criador}`, pornografia : "não"})
} else {
res.sendFile(error)
}
})    

router.get('/textpro/natural', async (req, res, next) => {
const cdapikey = req.query.apikey;
nome = req.query.nome;
if (cdapikey === undefined) return res.json(resposta.semkey)
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
if (!nome) return res.json({ status : false, criador : `${criador}`, mensagem : "coloque o parametrô nome"})
var img = await getBuffer(`https://akame-api.herokuapp.com/api/textpro/naturalleaves?texto=${nome}&apikey=${apikeypremium}`)
res.type('jpg')
res.send(img)
})

 router.all('/loli', async (req, res) => {
   var cdapikey = req.query.apikey;
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
   json = JSON.parse(fs.readFileSync('funções/lolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   })
  router.get('/canvas/*', async (req, res) => {
  var cdapikey = req.query.apikey;
   let { url, texto } = req.query
   try {
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
  switch(req.path.replace(/\/canvas/, '').toLowerCase()) {
 case '/trigger':
 case '/trigger/':
  if (!url) return res.status(408).send(resposta.cdimg)
  res.type('gif')
  res.send(await canvacord.trigger(url))
 break
 case '/changemymind':
 case '/changemymind/':
  if (!texto) return res.status(408).send(resposta.cdimg)
  res.type('jpg')
  res.send(await canvacord.changemymind(texto))
  break
 case '/clyde':
 case '/clyde/':
  if (!texto) return res.status(408).send(resposta.cdimg)
  res.type('jpg')
  res.send(await canvacord.clyde(texto))
  break
 default: 
 res.status(404).json({
            status:404,
            error: 'A página que você está procurando não foi encontrada',
            endpoint: req.path
        })
 }
  } catch (e) {
  console.error(e) 
   res.type('text/json')
   res.status(400).send(resposta.error)
 }
 })
 router.get('/nsfw/hentai', async (req, res) => {
 var cdapikey = req.query.apikey;
 try {
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
 end = getRandom([,"waifu", "neko"])
 let { url } = await getJson(`https://api.waifu.pics/nsfw/${end}`)
 let buffer = await getBuffer(url)
 res.type('png')
 res.send(buffer)
 } catch {
 res.type('text/json')
 res.status(400).send(resposta.error)
 }
 })
 router.get('/download/ytmp3', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 link = req.query.link          
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
 if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o link"})
 ytDonlodMp3(link).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})

 router.get('/download/ytmp4', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 link = req.query.link          
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
 if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o link"})
 ytDonlodMp4(link).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})

/*router.get('/puxada/nome', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 nome = req.query.nome       
    const check = '123sayo'
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
const regex = new RegExp(nome, 'gi');
const rv = dados.pessoa.filter(
record => record.nome.match(regex)
);
		for (let i = 0; i < rv.length; i++){
	res.json({
nome: `${rv.[i]nome}`,
cpf: `${rv.[i]cpf}`
})
	}
})*/

 router.get('/download/play', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 nome = req.query.nome
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
 if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o nome"})
 ytPlayMp3(nome).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})

 router.get('/download/playv', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 nome = req.query.nome
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
 if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o nome"})
 ytPlayMp4(nome).then((akk) => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: akk
})}).catch(e => {
res.sendFile(error)})})

 router.get('/pesquisa/xvideos', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 nome = req.query.nome
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
adicionar_limit(cdapikey);
if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o nome"})
xvideos(nome).then(i => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: i
})}).catch(e => {
res.sendFile(error)})})

 router.get('/pesquisa/hentaistube', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 nome = req.query.nome
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
adicionar_limit(cdapikey);
if (!nome) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o nome"})
hentaistube(nome).then(i => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: i
})}).catch(e => {
res.sendFile(error)})})

 router.get('/ferramentas/fonte', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 var texto = req.query.texto
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
adicionar_limit(cdapikey);
if (!texto) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o texto"})
styletext(texto).then(i => {
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: i
})}).catch(e => {
res.sendFile(error)})})

 router.get('/ferramentas/telegraph', async(req, res, next) => {
 var cdapikey = req.query.apikey;
 link = req.query.link
    const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
adicionar_limit(cdapikey);
if (!link) return res.json({ status : false, criador : `criador`, mensagem : "Coloque o link"})
ran = getRandom('.jpg')
rano = getRandom('.jpg')
buff = await getBuffer(link)
fs.writeFileSync(ran, buff)
i = await TelegraPh(ran)
res.json({
status: true,
código: 200,
criador: `${criador}`,
resultado: util.format(i)
})
})

router.get('/bins', async(req, res, next) => {
const lineReader = require('line-reader');
lineReader.eachLine('./d.txt',(line,last)=>{
var a = line.split("|")[0]
res.json({
status: true,
código: 200,
criador: `${criador}`,
bins: a
})
})
})
   

 router.all('/shota', async (req, res) => {
 var cdapikey = req.query.apikey;
   try {
  if (cdapikey === undefined) return res.json(resposta.semkey)
        const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
   json = JSON.parse(fs.readFileSync('funções/shotas.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })
router.post('/post/body', async (req, res) => {
  res.send(req.body)
})
   router.all('/nsfwloli', async (req, res) => {
   var cdapikey = req.query.apikey;
   try {
  if (cdapikey === undefined) return res.json(resposta.semkey)
        const check = await verificar_apikey(cdapikey);
    if (!check) return res.status(403).send({
        status: 403,
        mensagem: `apikey: ${cdapikey} não encontrada, por favor registre-se primeiro!`
    });
    let limit = await isLimit(cdapikey);
    if (limit) return res.status(403).send({status: 403, message: 'seu limit acabou compre o premium...'});
   adicionar_limit(cdapikey);
   json = JSON.parse(fs.readFileSync('funções/nsfwlolis.json').toString())
   random = json[Math.floor(Math.random() * json.length)]
   res.type('png')
   res.send(await getBuffer(random))
   } catch (e) {
   res.send(resposta.error)
   }
   })


module.exports = router


/******************************\
╭━━━╮╭━━╮╭━╮╭━╮
┃╭━━╯╰┫┣╯┃┃╰╯┃┃
┃╰━━╮╱┃┃╱┃╭╮╭╮┃
┃╭━━╯╱┃┃╱┃┃┃┃┃┃
┃┃╱╱╱╭┫┣╮┃┃┃┃┃┃
╰╯╱╱╱╰━━╯╰╯╰╯╰╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱
*******************************/