import React from 'react';
import './GoalList.css'; // css files are global, but good practice to keep separate css files for components

// props passes data from component to component
const GoalList = props => {
    return (
        <ul className="goal-list">{
        
            props.goals.map((goal) => {
                return <li key={goal.id}>{goal.text}</li>;
            })
        
        }</ul>
    );
};

export default GoalList;