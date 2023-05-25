# image操作

## 查询

1.`ImageList`

[func (cli \*Client) ImageList(ctx context.Context, options types.ImageListOptions) (\[\]types.ImageSummary, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImageList "func (cli *Client) ImageList(ctx context.Context, options types.ImageListOptions) (\[]types.ImageSummary, error)")

查看目标主机上镜像列表。

types.ImageListOptions

```vim&#x20;script
type ImageListOptions struct {
  All     bool
  Filters filters.Args
}
```

2.`ImageSearch`

[func (cli \*Client) ImageSearch(ctx context.Context, term string, options types.ImageSearchOptions) (\[\]registry.SearchResult, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImageSearch "func (cli *Client) ImageSearch(ctx context.Context, term string, options types.ImageSearchOptions) (\[]registry.SearchResult, error)")

在docker远程仓库中查找指定镜像

3.`ImageInspectWithRaw`

[func (cli \*Client) ImageInspectWithRaw(ctx context.Context, imageID string) (types.ImageInspect, \[\]byte, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImageInspectWithRaw "func (cli *Client) ImageInspectWithRaw(ctx context.Context, imageID string) (types.ImageInspect, \[]byte, error)")

获取指定镜像的元数据

4.`ImageHistory`

[func (cli \*Client) ImageHistory(ctx context.Context, imageID string) (\[\]image.HistoryResponseItem, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImageHistory "func (cli *Client) ImageHistory(ctx context.Context, imageID string) (\[]image.HistoryResponseItem, error)")

查看指定镜像的创建历史

## 获取

1.`ImagePull`

[func (cli \*Client) ImagePull(ctx context.Context, refStr string, options types.ImagePullOptions) (io.ReadCloser, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImagePull "func (cli *Client) ImagePull(ctx context.Context, refStr string, options types.ImagePullOptions) (io.ReadCloser, error)")

从远程仓库获取镜像

2.`ImageSave`

[func (cli \*Client) ImageSave(ctx context.Context, imageIDs \[\]string) (io.ReadCloser, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImageSave "func (cli *Client) ImageSave(ctx context.Context, imageIDs \[]string) (io.ReadCloser, error)")

将指定镜像保存成 tar 归档文件

3.`ImageLoad`

[func (cli \*Client) ImageLoad(ctx context.Context, input io.Reader, quiet bool) (types.ImageLoadResponse, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImageLoad "func (cli *Client) ImageLoad(ctx context.Context, input io.Reader, quiet bool) (types.ImageLoadResponse, error)")

导入保存的归档文件

4.`ImageImport`

[func (cli \*Client) ImageImport(ctx context.Context, source types.ImageImportSource, ref string, ...) (io.ReadCloser, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImageImport "func (cli *Client) ImageImport(ctx context.Context, source types.ImageImportSource, ref string, ...) (io.ReadCloser, error)")

从归档文件中创建镜像

5.`ImagePush`

[func (cli \*Client) ImagePush(ctx context.Context, image string, options types.ImagePushOptions) (io.ReadCloser, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImagePush "func (cli *Client) ImagePush(ctx context.Context, image string, options types.ImagePushOptions) (io.ReadCloser, error)")

向远端仓库添加镜像

6.`ImageBuild`

[func (cli \*Client) ImageBuild(ctx context.Context, buildContext io.Reader, options types.ImageBuildOptions) (types.ImageBuildResponse, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImageBuild "func (cli *Client) ImageBuild(ctx context.Context, buildContext io.Reader, options types.ImageBuildOptions) (types.ImageBuildResponse, error)")

从docker file文件新建镜像

7.`ImageCreate`

[func (cli \*Client) ImageCreate(ctx context.Context, parentReference string, options types.ImageCreateOptions) (io.ReadCloser, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImageCreate "func (cli *Client) ImageCreate(ctx context.Context, parentReference string, options types.ImageCreateOptions) (io.ReadCloser, error)")

> // ImageCreate creates a new image based in the parent options.
> // It returns the JSON content in the response body.

## 更改

1.`ImageTag`

[func (cli \*Client) ImageTag(ctx context.Context, source, target string) error](https://pkg.go.dev/github.com/docker/docker/client#Client.ImageTag "func (cli *Client) ImageTag(ctx context.Context, source, target string) error")

为镜像添加标签

2.`ImageRemove`

[func (cli \*Client) ImageRemove(ctx context.Context, imageID string, options types.ImageRemoveOptions) (\[\]types.ImageDeleteResponseItem, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImageRemove "func (cli *Client) ImageRemove(ctx context.Context, imageID string, options types.ImageRemoveOptions) (\[]types.ImageDeleteResponseItem, error)")

删除镜像

3.`ImagesPrune`

[func (cli \*Client) ImagesPrune(ctx context.Context, pruneFilters filters.Args) (types.ImagesPruneReport, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ImagesPrune "func (cli *Client) ImagesPrune(ctx context.Context, pruneFilters filters.Args) (types.ImagesPruneReport, error)")

删除悬空镜像
