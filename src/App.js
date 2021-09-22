import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

// this is a react component because it returns JSX code
const App = () => {
  // first state -> holds state snapshot, second state -> holds a function to update state snapshot
  const [courseGoals, setCourseGoals] = useState( [
    {id: 'cg1', text: 'Finish the Course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'}
  ]);

  const addNewGoalHandler = newGoal => {
    // concat() returns a new array, where push would simply add to an array
    // setCourseGoals(courseGoals.concat(newGoal));

    // guarantees every update occurs without missing any upon quick requests
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
