export const middlewareAuthor = (req, res, next) => {
	res.author = {
		name: "Juan Manuel",
		lastname: "Garcia",
	};
	next();
};

export default {middlewareAuthor};
