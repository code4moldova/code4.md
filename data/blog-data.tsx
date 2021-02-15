import ImageStatic from "../images/articles/article1.jpg"

export interface Article {
    title: string,
    subtitle: string,
    date: string,
    image: string,
    content: string,

}


export const blogData = [

    {

        title: "Titlu blog titlu blog titlu blog titlu blog titlu blog1",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tincidunt fames risus dapibus pulvinar feugiat aliquam.",
        date: "3 iunie 2020",
        image: ImageStatic,
        content: `<h1> this is will be comming from a CMS </h1>`
    },

    {

        title: "Titlu blog titlu blog titlu blog titlu blog titlu blog2",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tincidunt fames risus dapibus pulvinar feugiat aliquam.",
        date: "3 iunie 2020",
        image: ImageStatic,
        content: "<h1> this is will be comming from a CMS </h1>"

    }
    ,
    {
        title: "Titlu blog titlu blog titlu blog titlu blog titlu blog3",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tincidunt fames risus dapibus pulvinar feugiat aliquam.",
        date: "3 iunie 2020",
        image: ImageStatic,
        content: "<h1> this is will be comming from a CMS </h1>"

    },
    {
        title: "Titlu blog titlu blog titlu blog titlu blog titlu blog4",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tincidunt fames risus dapibus pulvinar feugiat aliquam.",
        date: "3 iunie 2020",
        image: ImageStatic,
        content: "<h1> this is will be comming from a CMS </h1>"
    },
    {
        title: "Titlu blog titlu blog titlu blog titlu blog titlu blog5",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tincidunt fames risus dapibus pulvinar feugiat aliquam.",
        date: "3 iunie 2020",
        image: ImageStatic,
        content: "<h1> this is will be comming from a CMS </h1>"
    }




]




// function to return all Articles to the getStaticPaths
export function getAllArticles() {
    return blogData.map((article) => {
        return {
            params: {
                title: article.title,
            },
        };
    });
}
