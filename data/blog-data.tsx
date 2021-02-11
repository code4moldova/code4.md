import ImageStatic from "../images/articles/article1.jpg"

export interface Article {
    title: string,
    subtitle: string,
    date: string,
    images: string[],
    article: string,

}


export const blogData = [

    {

        title: "Titlu blog titlu blog titlu blog titlu blog titlu blog1",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tincidunt fames risus dapibus pulvinar feugiat aliquam.",
        date: "3 iunie 2020",
        images: [ImageStatic, ImageStatic],
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra aenean dolor accumsan enim posuere neque orci ut amet. Morbi velit pretium sagittis sed. Magna dui augue tristique quis habitasse elit. Nulla nunc eget suspendisse consectetur sagittis morbi augue et, viverra. Egestas volutpat tincidunt elementum lectus lectus scelerisque. Gravida pulvinar vulputate orci dolor, nunc vitae at. Phasellus massa nec ut molestie nulla nullam diam sodales. Pellentesque est tempus, accumsan pharetra nulla dignissim feugiat nullam et. Aenean mollis nunc in blandit ultricies nunc feugiat. Netus malesuada neque, mattis viverra nisi. Sagittis sem diam ornare sed urna sit quam vulputate. Mauris pellentesque in nibh non. Laoreet adipiscing sit gravida mus. Id elit et faucibus tincidunt nec.",

    },

    {

        title: "Titlu blog titlu blog titlu blog titlu blog titlu blog2",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tincidunt fames risus dapibus pulvinar feugiat aliquam.",
        date: "3 iunie 2020",
        images: [ImageStatic, ImageStatic],
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra aenean dolor accumsan enim posuere neque orci ut amet. Morbi velit pretium sagittis sed. Magna dui augue tristique quis habitasse elit. Nulla nunc eget suspendisse consectetur sagittis morbi augue et, viverra. Egestas volutpat tincidunt elementum lectus lectus scelerisque. Gravida pulvinar vulputate orci dolor, nunc vitae at. Phasellus massa nec ut molestie nulla nullam diam sodales. Pellentesque est tempus, accumsan pharetra nulla dignissim feugiat nullam et. Aenean mollis nunc in blandit ultricies nunc feugiat. Netus malesuada neque, mattis viverra nisi. Sagittis sem diam ornare sed urna sit quam vulputate. Mauris pellentesque in nibh non. Laoreet adipiscing sit gravida mus. Id elit et faucibus tincidunt nec.",

    }
    ,
    {
        title: "Titlu blog titlu blog titlu blog titlu blog titlu blog3",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tincidunt fames risus dapibus pulvinar feugiat aliquam.",
        date: "3 iunie 2020",
        images: [ImageStatic, ImageStatic],
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra aenean dolor accumsan enim posuere neque orci ut amet. Morbi velit pretium sagittis sed. Magna dui augue tristique quis habitasse elit. Nulla nunc eget suspendisse consectetur sagittis morbi augue et, viverra. Egestas volutpat tincidunt elementum lectus lectus scelerisque. Gravida pulvinar vulputate orci dolor, nunc vitae at. Phasellus massa nec ut molestie nulla nullam diam sodales. Pellentesque est tempus, accumsan pharetra nulla dignissim feugiat nullam et. Aenean mollis nunc in blandit ultricies nunc feugiat. Netus malesuada neque, mattis viverra nisi. Sagittis sem diam ornare sed urna sit quam vulputate. Mauris pellentesque in nibh non. Laoreet adipiscing sit gravida mus. Id elit et faucibus tincidunt nec.",

    },
    {
        title: "Titlu blog titlu blog titlu blog titlu blog titlu blog4",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tincidunt fames risus dapibus pulvinar feugiat aliquam.",
        date: "3 iunie 2020",
        images: [ImageStatic, ImageStatic],
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra aenean dolor accumsan enim posuere neque orci ut amet. Morbi velit pretium sagittis sed. Magna dui augue tristique quis habitasse elit. Nulla nunc eget suspendisse consectetur sagittis morbi augue et, viverra. Egestas volutpat tincidunt elementum lectus lectus scelerisque. Gravida pulvinar vulputate orci dolor, nunc vitae at. Phasellus massa nec ut molestie nulla nullam diam sodales. Pellentesque est tempus, accumsan pharetra nulla dignissim feugiat nullam et. Aenean mollis nunc in blandit ultricies nunc feugiat. Netus malesuada neque, mattis viverra nisi. Sagittis sem diam ornare sed urna sit quam vulputate. Mauris pellentesque in nibh non. Laoreet adipiscing sit gravida mus. Id elit et faucibus tincidunt nec.",

    },
    {
        title: "Titlu blog titlu blog titlu blog titlu blog titlu blog5",
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt tincidunt fames risus dapibus pulvinar feugiat aliquam.",
        date: "3 iunie 2020",
        images: [ImageStatic, ImageStatic],
        article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra aenean dolor accumsan enim posuere neque orci ut amet. Morbi velit pretium sagittis sed. Magna dui augue tristique quis habitasse elit. Nulla nunc eget suspendisse consectetur sagittis morbi augue et, viverra. Egestas volutpat tincidunt elementum lectus lectus scelerisque. Gravida pulvinar vulputate orci dolor, nunc vitae at. Phasellus massa nec ut molestie nulla nullam diam sodales. Pellentesque est tempus, accumsan pharetra nulla dignissim feugiat nullam et. Aenean mollis nunc in blandit ultricies nunc feugiat. Netus malesuada neque, mattis viverra nisi. Sagittis sem diam ornare sed urna sit quam vulputate. Mauris pellentesque in nibh non. Laoreet adipiscing sit gravida mus. Id elit et faucibus tincidunt nec.",

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
