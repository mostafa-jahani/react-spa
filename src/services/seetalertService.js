import Swal from "sweetalert2";

export const sweetalertAddPost = () => {
    Swal.fire({
        title: "Thanks!",
        text: "Post created successfully",
        icon: "success",
        confirmButtonText: "Ok",
    });
}

export const sweetalertUpdatePost = () => {
    Swal.fire({
        title: "Thanks!",
        text: "Post update successfully",
        icon: "success",
        confirmButtonText: "Ok",
    });
}

export const sweetalertDeletePost = (postId) => {
    Swal.fire({
        title: "Thanks!",
        text: `Post ${postId} delete successfully`,
        icon: "success",
        confirmButtonText: "Ok",
    });
}

export const sweetalertError = (err) => {
    Swal.fire({
        title: "Error!",
        text: err.message,
        icon: "warning",
        confirmButtonText: "Ok",
    });
}