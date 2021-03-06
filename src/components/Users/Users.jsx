import React from 'react';
import styles from './users.module.css';
import userPhoto from '../../assets/images/user.png';
import { NavLink } from 'react-router-dom';
import { Paginator } from '../common/Paginator/Paginator';
import { usersAPI } from '../../api/api';

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  let pagesItem = pages.map((p) => {
    return (
      <span
        key={p}
        onClick={(e) => props.onPageChanged(p)}
        className={props.currentPage === p ? styles.selectedPage : ''}
      >
        {p}
      </span>
    );
  });
  return (
    <div>
      <div>
        {/* {pagesItem.length > 20 ? pagesItem = [...pagesItem.slice(0, 20), '...', pagesItem[pagesItem.length - 1]] : pagesItem} */}
        <Paginator
          totalUsersCount={props.totalUsersCount}
          pageSize={props.pageSize}
          onPageChanged={props.onPageChanged}
          currentPage={props.currentPage}
        />
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  src={u.photos.small !== null ? u.photos.small : userPhoto}
                  className={styles.userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                  disabled={props.followingIsProgreess.some(
                    (id) => id === u.id
                  )}
                  onClick={() => {
                    props.unFollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingIsProgreess.some(
                    (id) => id === u.id
                  )}
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
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
        </div>
      ))}
    </div>
  );
};

export default Users;
