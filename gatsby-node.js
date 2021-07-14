exports.createPages = ({ actions }) => {
    const {createRedirect} = actions
    createRedirect({ fromPath: '/cv', toPath: '/cv.pdf', isPermanent: true });
}