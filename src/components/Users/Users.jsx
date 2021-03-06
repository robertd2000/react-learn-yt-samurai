import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { usersAPI } from '../../api/api';

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) 
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)  
    }

    let pagesItem = pages.map(p => {
        return <span key={p} onClick={e => props.onPageChanged(p)} className={props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
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
                                    <button disabled={props.followingIsProgreess.some(id => id === u.id)} onClick={() => {
                                        props.toggleIsFollowingProgress(true, u.id)
                                        usersAPI.deleteUsers(u.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.unfollow(u.id)
                                                }
                                        props.toggleIsFollowingProgress(false, u.id)
                                        })

                                    }}>Unfollow</button> 
                                        :
                                    <button disabled={props.followingIsProgreess.some(id => id === u.id)} onClick={
                                        () => {
                                            props.toggleIsFollowingProgress(true, u.id)
                                            usersAPI.followUsers(u.id)
                                                .then(data => {
                                                    if (data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                props.toggleIsFollowingProgress(false, u.id)

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