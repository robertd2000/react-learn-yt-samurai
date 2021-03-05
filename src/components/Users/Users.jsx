import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) 
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)  
    }

    let pagesItem = pages.map(p => {
        return <span onClick={e => props.onPageChanged(p)} className={props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
    })
        return (
            <div>
                <div>
                    {pagesItem.length > 20 ? pagesItem = [...pagesItem.slice(0, 20), '...', pagesItem[pagesItem.length - 1]] : pagesItem}

                </div>
                {
                    props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + u.id} >
                                    <img src={u.photos.small !== null ? u.photos.small : userPhoto } className={styles.userPhoto} alt=""/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                            withCredentials: true,
                                            headers: {
                                                'API-KEY': '2bbaa87f-971d-4450-8950-56c009301e52'
                                            } 
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                        })

                                    }}>Unfollow</button> 
                                        :
                                    <button onClick={
                                        () => {
                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                                withCredentials: true,
                                                headers: {
                                                    'API-KEY': '2bbaa87f-971d-4450-8950-56c009301e52'
                                                } 
                                            })
                                                .then(response => {
                                                    if (response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                            })
    
                                        }
                                    }>Follow</button>
                                    }
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                            <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </span>
                        </span>
                    </div>)
                }
            </div>
        )
        
}

export default Users