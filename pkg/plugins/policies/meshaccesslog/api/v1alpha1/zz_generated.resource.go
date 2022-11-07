// Generated by tools/resource-gen.
// Run "make generate" to update this file.

// nolint:whitespace
package v1alpha1

import (
	_ "embed"
	"fmt"

	"k8s.io/kube-openapi/pkg/validation/spec"
	"sigs.k8s.io/yaml"

	"github.com/kumahq/kuma/pkg/core/resources/model"
	"github.com/kumahq/kuma/pkg/plugins/policies/validation"
)

//go:embed schema.yaml
var rawSchema []byte
var schema = &spec.Schema{}

func init() {
	if err := yaml.Unmarshal(rawSchema, schema); err != nil {
		panic(err)
	}
}

const (
	MeshAccessLogType model.ResourceType = "MeshAccessLog"
)

var _ model.Resource = &MeshAccessLogResource{}

type MeshAccessLogResource struct {
	Meta model.ResourceMeta
	Spec *MeshAccessLog
}

func NewMeshAccessLogResource() *MeshAccessLogResource {
	return &MeshAccessLogResource{
		Spec: &MeshAccessLog{},
	}
}

func (t *MeshAccessLogResource) GetMeta() model.ResourceMeta {
	return t.Meta
}

func (t *MeshAccessLogResource) SetMeta(m model.ResourceMeta) {
	t.Meta = m
}

func (t *MeshAccessLogResource) GetSpec() model.ResourceSpec {
	return t.Spec
}

func (t *MeshAccessLogResource) SetSpec(spec model.ResourceSpec) error {
	protoType, ok := spec.(*MeshAccessLog)
	if !ok {
		return fmt.Errorf("invalid type %T for Spec", spec)
	} else {
		if protoType == nil {
			t.Spec = &MeshAccessLog{}
		} else {
			t.Spec = protoType
		}
		return nil
	}
}

func (t *MeshAccessLogResource) Descriptor() model.ResourceTypeDescriptor {
	return MeshAccessLogResourceTypeDescriptor
}

func (t *MeshAccessLogResource) Validate() error {
	if err := validation.ValidateSchema(t.GetSpec(), schema); err != nil {
		return err
	}

	if v, ok := interface{}(t).(interface{ validate() error }); !ok {
		return nil
	} else {
		return v.validate()
	}
}

var _ model.ResourceList = &MeshAccessLogResourceList{}

type MeshAccessLogResourceList struct {
	Items      []*MeshAccessLogResource
	Pagination model.Pagination
}

func (l *MeshAccessLogResourceList) GetItems() []model.Resource {
	res := make([]model.Resource, len(l.Items))
	for i, elem := range l.Items {
		res[i] = elem
	}
	return res
}

func (l *MeshAccessLogResourceList) GetItemType() model.ResourceType {
	return MeshAccessLogType
}

func (l *MeshAccessLogResourceList) NewItem() model.Resource {
	return NewMeshAccessLogResource()
}

func (l *MeshAccessLogResourceList) AddItem(r model.Resource) error {
	if trr, ok := r.(*MeshAccessLogResource); ok {
		l.Items = append(l.Items, trr)
		return nil
	} else {
		return model.ErrorInvalidItemType((*MeshAccessLogResource)(nil), r)
	}
}

func (l *MeshAccessLogResourceList) GetPagination() *model.Pagination {
	return &l.Pagination
}

var MeshAccessLogResourceTypeDescriptor = model.ResourceTypeDescriptor{
	Name:                MeshAccessLogType,
	Resource:            NewMeshAccessLogResource(),
	ResourceList:        &MeshAccessLogResourceList{},
	Scope:               model.ScopeMesh,
	KDSFlags:            model.FromGlobalToZone,
	WsPath:              "meshaccesslogs",
	KumactlArg:          "meshaccesslog",
	KumactlListArg:      "meshaccesslogs",
	AllowToInspect:      true,
	IsPolicy:            true,
	IsExperimental:      false,
	SingularDisplayName: "Mesh Access Log",
	PluralDisplayName:   "Mesh Access Logs",
	IsPluginOriginated:  true,
}
