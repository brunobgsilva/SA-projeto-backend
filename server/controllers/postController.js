const { Post } = require('../models');

exports.criarPost = async(req, res) => {

  try {

    const {title, text, likes, dislikes} = req.body;
    const novoPost = await Post.create({ title, text, likes, dislikes });

    res.status(201).json({
      mensagem: 'Post criado com sucesso',
      post: novoPost
    });

  } catch (err) {

    res.status(400).json({
      erro: 'Erro ao criar post',
      detalhes: err.message
    });

  };

};

exports.listarPosts = async(req, res) => {

  try {

    const posts = await Post.findAll();

    res.status(200).json({
        posts
    });

  } catch (err) {

    res.status(400).json({
      erro: 'Erro ao retornar posts',
      detalhes: err.message
    });

  };

};

exports.listarPostPorId = async(req, res) => {

  const postId = req.params.id;

  try {

    const post = await Post.findByPk(postId);

    res.status(200).json({
        post
    });

  } catch (err) {

    res.status(400).json({
      erro: 'Erro ao retornar post',
      detalhes: err.message
    });

  };

};