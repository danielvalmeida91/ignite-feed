import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post, PostType } from './components/Post';

import styles from './App.module.css'
import './global.css'


const posts:PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'http://github.com/danielvalmeida91.png',
      name: 'Daniel Ventura de Almeida',
      role: 'Co-Founder @AgroImagem',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-03-23 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'http://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-03-16 17:30:00'),
  },
]

export function App() {
  return(
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map(
              post => (
                <Post
                  key={post.id}
                  post={post}
                />
              )
            )
          }
        </main>
      </div>

    </div>
  );

 }