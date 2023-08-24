import { Trash , ThumbsUp } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'
import { useState } from 'react'

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void
}

export function Comment({content, onDeleteComment}:CommentProps){
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment(){
    onDeleteComment(content)
  }

  function handleLikeComment(){
    setLikeCount((state: number) => {
      return state + 1
    })
  }


  return(
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" alt=""/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong> Diego Fernandes</strong>
              <time title='21 de Março às 11:00h' dateTime='2023-03-21 10:00:00'>Cerce da 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}