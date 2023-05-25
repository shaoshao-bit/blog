# cli方法（临时）

\*   [func NewClient(host string, version string, client *http.Client, ...) (* Client, error)](https://pkg.go.dev/github.com/docker/docker/client#NewClient "func NewClient(host string, version string, client *http.Client, ...) (*Client, error)")DEPRECATED

*   [func NewClientWithOpts(ops ...Opt) (\*Client, error)](https://pkg.go.dev/github.com/docker/docker/client#NewClientWithOpts "func NewClientWithOpts(ops ...Opt) (*Client, error)")

*   [func NewEnvClient() (\*Client, error)](https://pkg.go.dev/github.com/docker/docker/client#NewEnvClient "func NewEnvClient() (*Client, error)")DEPRECATED

\*  [func (cli *Client) BuildCachePrune(ctx context.Context, opts types.BuildCachePruneOptions) (* types.BuildCachePruneReport, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.BuildCachePrune "func (cli *Client) BuildCachePrune(ctx context.Context, opts types.BuildCachePruneOptions) (*types.BuildCachePruneReport, error)")

*   [func (cli \*Client) BuildCancel(ctx context.Context, id string) error](https://pkg.go.dev/github.com/docker/docker/client#Client.BuildCancel "func (cli *Client) BuildCancel(ctx context.Context, id string) error")

*   [func (cli \*Client) CheckpointCreate(ctx context.Context, container string, options types.CheckpointCreateOptions) error](https://pkg.go.dev/github.com/docker/docker/client#Client.CheckpointCreate "func (cli *Client) CheckpointCreate(ctx context.Context, container string, options types.CheckpointCreateOptions) error")

*   [func (cli \*Client) CheckpointDelete(ctx context.Context, containerID string, options types.CheckpointDeleteOptions) error](https://pkg.go.dev/github.com/docker/docker/client#Client.CheckpointDelete "func (cli *Client) CheckpointDelete(ctx context.Context, containerID string, options types.CheckpointDeleteOptions) error")

*   [func (cli \*Client) CheckpointList(ctx context.Context, container string, options types.CheckpointListOptions) (\[\]types.Checkpoint, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.CheckpointList "func (cli *Client) CheckpointList(ctx context.Context, container string, options types.CheckpointListOptions) (\[]types.Checkpoint, error)")

*   [func (cli \*Client) ClientVersion() string](https://pkg.go.dev/github.com/docker/docker/client#Client.ClientVersion "func (cli *Client) ClientVersion() string")

*   [func (cli \*Client) Close() error](https://pkg.go.dev/github.com/docker/docker/client#Client.Close "func (cli *Client) Close() error")

*   [func (cli \*Client) ConfigCreate(ctx context.Context, config swarm.ConfigSpec) (types.ConfigCreateResponse, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ConfigCreate "func (cli *Client) ConfigCreate(ctx context.Context, config swarm.ConfigSpec) (types.ConfigCreateResponse, error)")

*   [func (cli \*Client) ConfigInspectWithRaw(ctx context.Context, id string) (swarm.Config, \[\]byte, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ConfigInspectWithRaw "func (cli *Client) ConfigInspectWithRaw(ctx context.Context, id string) (swarm.Config, \[]byte, error)")

*   [func (cli \*Client) ConfigList(ctx context.Context, options types.ConfigListOptions) (\[\]swarm.Config, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ConfigList "func (cli *Client) ConfigList(ctx context.Context, options types.ConfigListOptions) (\[]swarm.Config, error)")

*   [func (cli \*Client) ConfigRemove(ctx context.Context, id string) error](https://pkg.go.dev/github.com/docker/docker/client#Client.ConfigRemove "func (cli *Client) ConfigRemove(ctx context.Context, id string) error")

*   [func (cli \*Client) ConfigUpdate(ctx context.Context, id string, version swarm.Version, config swarm.ConfigSpec) error](https://pkg.go.dev/github.com/docker/docker/client#Client.ConfigUpdate "func (cli *Client) ConfigUpdate(ctx context.Context, id string, version swarm.Version, config swarm.ConfigSpec) error")

*   [func (cli \*Client) CustomHTTPHeaders() map\[string\]string](https://pkg.go.dev/github.com/docker/docker/client#Client.CustomHTTPHeaders "func (cli *Client) CustomHTTPHeaders() map\[string]string")

*   [func (cli \*Client) DaemonHost() string](https://pkg.go.dev/github.com/docker/docker/client#Client.DaemonHost "func (cli *Client) DaemonHost() string")

*   [func (cli \*Client) DialHijack(ctx context.Context, url, proto string, meta map\[string\]\[\]string) (net.Conn, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.DialHijack "func (cli *Client) DialHijack(ctx context.Context, url, proto string, meta map\[string]\[]string) (net.Conn, error)")

*   [func (cli \*Client) Dialer() func(context.Context) (net.Conn, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.Dialer "func (cli *Client) Dialer() func(context.Context) (net.Conn, error)")

*   [func (cli \*Client) DiskUsage(ctx context.Context) (types.DiskUsage, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.DiskUsage "func (cli *Client) DiskUsage(ctx context.Context) (types.DiskUsage, error)")

*   [func (cli \*Client) DistributionInspect(ctx context.Context, image, encodedRegistryAuth string) (registrytypes.DistributionInspect, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.DistributionInspect "func (cli *Client) DistributionInspect(ctx context.Context, image, encodedRegistryAuth string) (registrytypes.DistributionInspect, error)")

*   [func (cli \*Client) Events(ctx context.Context, options types.EventsOptions) (<-chan events.Message, <-chan error)](https://pkg.go.dev/github.com/docker/docker/client#Client.Events "func (cli *Client) Events(ctx context.Context, options types.EventsOptions) (<-chan events.Message, <-chan error)")

*   [func (cli \*Client) HTTPClient() \*http.Client](https://pkg.go.dev/github.com/docker/docker/client#Client.HTTPClient "func (cli *Client) HTTPClient() *http.Client")

*   [func (cli \*Client) Info(ctx context.Context) (types.Info, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.Info "func (cli *Client) Info(ctx context.Context) (types.Info, error)")

*   [func (cli \*Client) NegotiateAPIVersion(ctx context.Context)](https://pkg.go.dev/github.com/docker/docker/client#Client.NegotiateAPIVersion "func (cli *Client) NegotiateAPIVersion(ctx context.Context)")

*   [func (cli \*Client) NegotiateAPIVersionPing(p types.Ping)](https://pkg.go.dev/github.com/docker/docker/client#Client.NegotiateAPIVersionPing "func (cli *Client) NegotiateAPIVersionPing(p types.Ping)")

*   [func (cli \*Client) NetworkConnect(ctx context.Context, networkID, containerID string, ...) error](https://pkg.go.dev/github.com/docker/docker/client#Client.NetworkConnect "func (cli *Client) NetworkConnect(ctx context.Context, networkID, containerID string, ...) error")

*   [func (cli \*Client) NetworkCreate(ctx context.Context, name string, options types.NetworkCreate) (types.NetworkCreateResponse, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.NetworkCreate "func (cli *Client) NetworkCreate(ctx context.Context, name string, options types.NetworkCreate) (types.NetworkCreateResponse, error)")

*   [func (cli \*Client) NetworkDisconnect(ctx context.Context, networkID, containerID string, force bool) error](https://pkg.go.dev/github.com/docker/docker/client#Client.NetworkDisconnect "func (cli *Client) NetworkDisconnect(ctx context.Context, networkID, containerID string, force bool) error")

*   [func (cli \*Client) NetworkInspect(ctx context.Context, networkID string, options types.NetworkInspectOptions) (types.NetworkResource, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.NetworkInspect "func (cli *Client) NetworkInspect(ctx context.Context, networkID string, options types.NetworkInspectOptions) (types.NetworkResource, error)")

*   [func (cli \*Client) NetworkInspectWithRaw(ctx context.Context, networkID string, options types.NetworkInspectOptions) (types.NetworkResource, \[\]byte, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.NetworkInspectWithRaw "func (cli *Client) NetworkInspectWithRaw(ctx context.Context, networkID string, options types.NetworkInspectOptions) (types.NetworkResource, \[]byte, error)")

*   [func (cli \*Client) NetworkList(ctx context.Context, options types.NetworkListOptions) (\[\]types.NetworkResource, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.NetworkList "func (cli *Client) NetworkList(ctx context.Context, options types.NetworkListOptions) (\[]types.NetworkResource, error)")

*   [func (cli \*Client) NetworkRemove(ctx context.Context, networkID string) error](https://pkg.go.dev/github.com/docker/docker/client#Client.NetworkRemove "func (cli *Client) NetworkRemove(ctx context.Context, networkID string) error")

*   [func (cli \*Client) NetworksPrune(ctx context.Context, pruneFilters filters.Args) (types.NetworksPruneReport, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.NetworksPrune "func (cli *Client) NetworksPrune(ctx context.Context, pruneFilters filters.Args) (types.NetworksPruneReport, error)")

*   [func (cli \*Client) NewVersionError(APIrequired, feature string) error](https://pkg.go.dev/github.com/docker/docker/client#Client.NewVersionError "func (cli *Client) NewVersionError(APIrequired, feature string) error")

*   [func (cli \*Client) NodeInspectWithRaw(ctx context.Context, nodeID string) (swarm.Node, \[\]byte, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.NodeInspectWithRaw "func (cli *Client) NodeInspectWithRaw(ctx context.Context, nodeID string) (swarm.Node, \[]byte, error)")

*   [func (cli \*Client) NodeList(ctx context.Context, options types.NodeListOptions) (\[\]swarm.Node, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.NodeList "func (cli *Client) NodeList(ctx context.Context, options types.NodeListOptions) (\[]swarm.Node, error)")

*   [func (cli \*Client) NodeRemove(ctx context.Context, nodeID string, options types.NodeRemoveOptions) error](https://pkg.go.dev/github.com/docker/docker/client#Client.NodeRemove "func (cli *Client) NodeRemove(ctx context.Context, nodeID string, options types.NodeRemoveOptions) error")

*   [func (cli \*Client) NodeUpdate(ctx context.Context, nodeID string, version swarm.Version, node swarm.NodeSpec) error](https://pkg.go.dev/github.com/docker/docker/client#Client.NodeUpdate "func (cli *Client) NodeUpdate(ctx context.Context, nodeID string, version swarm.Version, node swarm.NodeSpec) error")

*   [func (cli \*Client) Ping(ctx context.Context) (types.Ping, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.Ping "func (cli *Client) Ping(ctx context.Context) (types.Ping, error)")

*   [func (cli \*Client) PluginCreate(ctx context.Context, createContext io.Reader, ...) error](https://pkg.go.dev/github.com/docker/docker/client#Client.PluginCreate "func (cli *Client) PluginCreate(ctx context.Context, createContext io.Reader, ...) error")

*   [func (cli \*Client) PluginDisable(ctx context.Context, name string, options types.PluginDisableOptions) error](https://pkg.go.dev/github.com/docker/docker/client#Client.PluginDisable "func (cli *Client) PluginDisable(ctx context.Context, name string, options types.PluginDisableOptions) error")

*   [func (cli \*Client) PluginEnable(ctx context.Context, name string, options types.PluginEnableOptions) error](https://pkg.go.dev/github.com/docker/docker/client#Client.PluginEnable "func (cli *Client) PluginEnable(ctx context.Context, name string, options types.PluginEnableOptions) error")

*   [func (cli *Client) PluginInspectWithRaw(ctx context.Context, name string) (* types.Plugin, \[\]byte, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.PluginInspectWithRaw "func (cli *Client) PluginInspectWithRaw(ctx context.Context, name string) (*types.Plugin, \[]byte, error)")

*   [func (cli \*Client) PluginInstall(ctx context.Context, name string, options types.PluginInstallOptions) (rc io.ReadCloser, err error)](https://pkg.go.dev/github.com/docker/docker/client#Client.PluginInstall "func (cli *Client) PluginInstall(ctx context.Context, name string, options types.PluginInstallOptions) (rc io.ReadCloser, err error)")

*   [func (cli \*Client) PluginList(ctx context.Context, filter filters.Args) (types.PluginsListResponse, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.PluginList "func (cli *Client) PluginList(ctx context.Context, filter filters.Args) (types.PluginsListResponse, error)")

*   [func (cli \*Client) PluginPush(ctx context.Context, name string, registryAuth string) (io.ReadCloser, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.PluginPush "func (cli *Client) PluginPush(ctx context.Context, name string, registryAuth string) (io.ReadCloser, error)")

*   [func (cli \*Client) PluginRemove(ctx context.Context, name string, options types.PluginRemoveOptions) error](https://pkg.go.dev/github.com/docker/docker/client#Client.PluginRemove "func (cli *Client) PluginRemove(ctx context.Context, name string, options types.PluginRemoveOptions) error")

*   [func (cli \*Client) PluginSet(ctx context.Context, name string, args \[\]string) error](https://pkg.go.dev/github.com/docker/docker/client#Client.PluginSet "func (cli *Client) PluginSet(ctx context.Context, name string, args \[]string) error")

*   [func (cli \*Client) PluginUpgrade(ctx context.Context, name string, options types.PluginInstallOptions) (rc io.ReadCloser, err error)](https://pkg.go.dev/github.com/docker/docker/client#Client.PluginUpgrade "func (cli *Client) PluginUpgrade(ctx context.Context, name string, options types.PluginInstallOptions) (rc io.ReadCloser, err error)")

*   [func (cli \*Client) RegistryLogin(ctx context.Context, auth types.AuthConfig) (registry.AuthenticateOKBody, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.RegistryLogin "func (cli *Client) RegistryLogin(ctx context.Context, auth types.AuthConfig) (registry.AuthenticateOKBody, error)")

*   [func (cli \*Client) SecretCreate(ctx context.Context, secret swarm.SecretSpec) (types.SecretCreateResponse, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.SecretCreate "func (cli *Client) SecretCreate(ctx context.Context, secret swarm.SecretSpec) (types.SecretCreateResponse, error)")

*   [func (cli \*Client) SecretInspectWithRaw(ctx context.Context, id string) (swarm.Secret, \[\]byte, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.SecretInspectWithRaw "func (cli *Client) SecretInspectWithRaw(ctx context.Context, id string) (swarm.Secret, \[]byte, error)")

*   [func (cli \*Client) SecretList(ctx context.Context, options types.SecretListOptions) (\[\]swarm.Secret, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.SecretList "func (cli *Client) SecretList(ctx context.Context, options types.SecretListOptions) (\[]swarm.Secret, error)")

*   [func (cli \*Client) SecretRemove(ctx context.Context, id string) error](https://pkg.go.dev/github.com/docker/docker/client#Client.SecretRemove "func (cli *Client) SecretRemove(ctx context.Context, id string) error")

*   [func (cli \*Client) SecretUpdate(ctx context.Context, id string, version swarm.Version, secret swarm.SecretSpec) error](https://pkg.go.dev/github.com/docker/docker/client#Client.SecretUpdate "func (cli *Client) SecretUpdate(ctx context.Context, id string, version swarm.Version, secret swarm.SecretSpec) error")

*   [func (cli \*Client) ServerVersion(ctx context.Context) (types.Version, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ServerVersion "func (cli *Client) ServerVersion(ctx context.Context) (types.Version, error)")

*   [func (cli \*Client) ServiceCreate(ctx context.Context, service swarm.ServiceSpec, ...) (types.ServiceCreateResponse, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ServiceCreate "func (cli *Client) ServiceCreate(ctx context.Context, service swarm.ServiceSpec, ...) (types.ServiceCreateResponse, error)")

*   [func (cli \*Client) ServiceInspectWithRaw(ctx context.Context, serviceID string, opts types.ServiceInspectOptions) (swarm.Service, \[\]byte, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ServiceInspectWithRaw "func (cli *Client) ServiceInspectWithRaw(ctx context.Context, serviceID string, opts types.ServiceInspectOptions) (swarm.Service, \[]byte, error)")

*   [func (cli \*Client) ServiceList(ctx context.Context, options types.ServiceListOptions) (\[\]swarm.Service, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ServiceList "func (cli *Client) ServiceList(ctx context.Context, options types.ServiceListOptions) (\[]swarm.Service, error)")

*   [func (cli \*Client) ServiceLogs(ctx context.Context, serviceID string, options types.ContainerLogsOptions) (io.ReadCloser, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ServiceLogs "func (cli *Client) ServiceLogs(ctx context.Context, serviceID string, options types.ContainerLogsOptions) (io.ReadCloser, error)")

*   [func (cli \*Client) ServiceRemove(ctx context.Context, serviceID string) error](https://pkg.go.dev/github.com/docker/docker/client#Client.ServiceRemove "func (cli *Client) ServiceRemove(ctx context.Context, serviceID string) error")

*   [func (cli \*Client) ServiceUpdate(ctx context.Context, serviceID string, version swarm.Version, ...) (types.ServiceUpdateResponse, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.ServiceUpdate "func (cli *Client) ServiceUpdate(ctx context.Context, serviceID string, version swarm.Version, ...) (types.ServiceUpdateResponse, error)")

*   [func (cli \*Client) SetCustomHTTPHeaders(headers map\[string\]string)](https://pkg.go.dev/github.com/docker/docker/client#Client.SetCustomHTTPHeaders "func (cli *Client) SetCustomHTTPHeaders(headers map\[string]string)")DEPRECATED

*   [func (cli \*Client) SwarmGetUnlockKey(ctx context.Context) (types.SwarmUnlockKeyResponse, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.SwarmGetUnlockKey "func (cli *Client) SwarmGetUnlockKey(ctx context.Context) (types.SwarmUnlockKeyResponse, error)")

*   [func (cli \*Client) SwarmInit(ctx context.Context, req swarm.InitRequest) (string, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.SwarmInit "func (cli *Client) SwarmInit(ctx context.Context, req swarm.InitRequest) (string, error)")

*   [func (cli \*Client) SwarmInspect(ctx context.Context) (swarm.Swarm, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.SwarmInspect "func (cli *Client) SwarmInspect(ctx context.Context) (swarm.Swarm, error)")

*   [func (cli \*Client) SwarmJoin(ctx context.Context, req swarm.JoinRequest) error](https://pkg.go.dev/github.com/docker/docker/client#Client.SwarmJoin "func (cli *Client) SwarmJoin(ctx context.Context, req swarm.JoinRequest) error")

*   [func (cli \*Client) SwarmLeave(ctx context.Context, force bool) error](https://pkg.go.dev/github.com/docker/docker/client#Client.SwarmLeave "func (cli *Client) SwarmLeave(ctx context.Context, force bool) error")

*   [func (cli \*Client) SwarmUnlock(ctx context.Context, req swarm.UnlockRequest) error](https://pkg.go.dev/github.com/docker/docker/client#Client.SwarmUnlock "func (cli *Client) SwarmUnlock(ctx context.Context, req swarm.UnlockRequest) error")

*   [func (cli \*Client) SwarmUpdate(ctx context.Context, version swarm.Version, swarm swarm.Spec, ...) error](https://pkg.go.dev/github.com/docker/docker/client#Client.SwarmUpdate "func (cli *Client) SwarmUpdate(ctx context.Context, version swarm.Version, swarm swarm.Spec, ...) error")

*   [func (cli \*Client) TaskInspectWithRaw(ctx context.Context, taskID string) (swarm.Task, \[\]byte, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.TaskInspectWithRaw "func (cli *Client) TaskInspectWithRaw(ctx context.Context, taskID string) (swarm.Task, \[]byte, error)")

*   [func (cli \*Client) TaskList(ctx context.Context, options types.TaskListOptions) (\[\]swarm.Task, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.TaskList "func (cli *Client) TaskList(ctx context.Context, options types.TaskListOptions) (\[]swarm.Task, error)")

*   [func (cli \*Client) TaskLogs(ctx context.Context, taskID string, options types.ContainerLogsOptions) (io.ReadCloser, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.TaskLogs "func (cli *Client) TaskLogs(ctx context.Context, taskID string, options types.ContainerLogsOptions) (io.ReadCloser, error)")

*   [func (cli \*Client) VolumeCreate(ctx context.Context, options volumetypes.VolumeCreateBody) (types.Volume, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.VolumeCreate "func (cli *Client) VolumeCreate(ctx context.Context, options volumetypes.VolumeCreateBody) (types.Volume, error)")

*   [func (cli \*Client) VolumeInspect(ctx context.Context, volumeID string) (types.Volume, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.VolumeInspect "func (cli *Client) VolumeInspect(ctx context.Context, volumeID string) (types.Volume, error)")

*   [func (cli \*Client) VolumeInspectWithRaw(ctx context.Context, volumeID string) (types.Volume, \[\]byte, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.VolumeInspectWithRaw "func (cli *Client) VolumeInspectWithRaw(ctx context.Context, volumeID string) (types.Volume, \[]byte, error)")

*   [func (cli \*Client) VolumeList(ctx context.Context, filter filters.Args) (volumetypes.VolumeListOKBody, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.VolumeList "func (cli *Client) VolumeList(ctx context.Context, filter filters.Args) (volumetypes.VolumeListOKBody, error)")

*   [func (cli \*Client) VolumeRemove(ctx context.Context, volumeID string, force bool) error](https://pkg.go.dev/github.com/docker/docker/client#Client.VolumeRemove "func (cli *Client) VolumeRemove(ctx context.Context, volumeID string, force bool) error")

*   [func (cli \*Client) VolumesPrune(ctx context.Context, pruneFilters filters.Args) (types.VolumesPruneReport, error)](https://pkg.go.dev/github.com/docker/docker/client#Client.VolumesPrune "func (cli *Client) VolumesPrune(ctx context.Context, pruneFilters filters.Args) (types.VolumesPruneReport, error)")
