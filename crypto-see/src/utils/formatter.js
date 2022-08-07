import moment from 'moment';

export const dateFormatter = (time) => {
	return moment(time).format('MMM Do');
};
