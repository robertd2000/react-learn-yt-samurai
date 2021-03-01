import * as axios from 'axios';
import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';

class Users extends React.Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = p => {
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(response => this.props.setUsers(response.data.items))
    }
 
    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) 
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)  
        }

        let pagesItem = pages.map(p => {
            return <span onClick={e => this.onPageChanged(p)} className={this.props.currentPage === p ? styles.selectedPage : ''}>{p}</span>
        })
        return (
            <div>
                <div>
                    {pagesItem.length > 20 ? pagesItem = [...pagesItem.slice(0, 20), '...', pagesItem[pagesItem.length - 1]] : pagesItem}

                </div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photos.small !== null ? u.photos.small : userPhoto } className={styles.userPhoto} alt=""/>
                            </div>
                            <div>
                                {u.followed ?
                                    <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button> :
                                    <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
    
}

export default Users