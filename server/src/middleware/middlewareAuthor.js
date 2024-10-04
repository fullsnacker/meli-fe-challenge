export const middlewareAuthor = (req, res, next) => {
	res.author = {
		name: "Juan",
		lastname: "Garcia",
	};
	next();
};

export default {middlewareAuthor};
